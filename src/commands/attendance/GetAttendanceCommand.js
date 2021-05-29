const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("attendance", "sessions", ["a"]);
  }

  async run(client, message, args) {
    // the channel id will be set by the mentor before conducting
    const channel = message.guild.channels.cache.find(
      (c) => c.id === "847916638279827506"
    );
    console.log();
    for (const [memberID, member] of channel.members) {
      console.log(member.displayName);
    }

    let attendeeCount =
      channel.members.size === 0 ? 0 : channel.members.size - 1;

    const sessionStartEmbed = new Discord.MessageEmbed()
      .setColor("#FCA315")
      .setAuthor(
        "IEEE CS Accelerator Program 2020-21",
        "https://i.imgur.com/kKe9hzu.jpg"
      )
      .setDescription(
        `Attendance has been recorded! \n **${attendeeCount}** members attended the session`
      );
    let confirm = await message.channel.send({
      embed: sessionStartEmbed,
    });
  }
};
