const db = require("../../db/firestore");
const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class SetprefixCommand extends BaseCommand {
  constructor() {
    super("setprefix", "config", []);
  }

  async run(client, message, args) {
    let newPrefix;
    message.channel.send("setprefix command works");
    if (args.length === 0) {
      message.channel.send("Missing Prefix");
    } else {
      newPrefix = args[0];
    }

    await db
      .collection("guilds")
      .doc(message.guild.id)
      .update({ prefix: newPrefix });
    message.channel.send(`New Prefix set to ${newPrefix}`);
  }
};
