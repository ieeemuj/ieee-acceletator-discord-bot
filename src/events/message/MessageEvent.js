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

    let result = await db.collection("guilds").doc(message.guild.id).get();
    if (result.exists) {
      clientConfig.prefix = result.data().prefix;
      clientConfig.mentorRoleID = result.data().mentorRoleID;
    }

    if (!message.member._roles.includes(clientConfig.mentorRoleID)) {
      message.channel.send("Only Mentors can manage sessions");
      return;
    }

    if (message.content.startsWith(clientConfig.prefix)) {
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
