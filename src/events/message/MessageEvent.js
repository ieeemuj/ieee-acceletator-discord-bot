const BaseEvent = require("../../utils/structures/BaseEvent");
const db = require("../../db/firestore");

let clientConfig = {
  prefix: "",
  mentorID: "",
};
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }

  async run(client, message) {
    if (message.author.bot) return;

    // check if the guild exists in our database and get the prefix
    let result = await db.collection("guilds").doc(message.guild.id).get();
    if (result.exists) {
      clientConfig.prefix = result.data().prefix;
      clientConfig.mentorRoleID = result.data().mentorRoleID;
    }

    if (message.content.startsWith(clientConfig.prefix)) {
      // if the author is not a mentor or admin they cannot trigger the function
      if (
        !message.member._roles.includes(clientConfig.mentorRoleID) &&
        !message.member.hasPermission("ADMINISTRATOR")
      ) {
        message.channel.send("Permission Denied");
        return;
      }

      const [cmdName, ...cmdArgs] = message.content
        .slice(clientConfig.prefix.length)
        .trim()
        .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
};
