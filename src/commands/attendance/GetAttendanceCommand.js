const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("attendance", "sessions", ["a"]);
  }

  async run(client, message, args) {
    // the channel id will be set by the mentor before conducting
    const channel = message.guild.channels.cache.find(
      (c) => c.id === "847916638279827506"
    );
    // console.log(channel.members.size);
    for (const [memberID, member] of channel.members) {
      console.log(member.displayName);
    }
  }
};
