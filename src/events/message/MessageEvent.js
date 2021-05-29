const BaseEvent = require("../../utils/structures/BaseEvent");
const db = require("../../db/firestore");
let prefix;

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }

  async run(client, message) {
    let result = await db.collection("guilds").doc(message.guild.id).get();
    if (result.exists) {
      prefix = result.data().prefix;
    }

    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
      const [cmdName, ...cmdArgs] = message.content
        .slice(prefix.length)
        .trim()
        .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
};
