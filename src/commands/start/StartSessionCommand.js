const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("start", "sessions", ["s"]);
  }

  async run(client, message, args) {
    // from a webhook
    const options = {
      title: "Week 1",
      channelID: "<#847916638279827506>",
      githubLink: "[IEEECS/Webdev2021](https://discordjs.guide/)",
    };

    const sessionStartEmbed = new Discord.MessageEmbed()
      .setColor("#FCA315")
      .setTitle(options.title ? `${options.title}` : "Null")
      .setURL("https://github.com/manavendrasen/WEBTECHLAB-2021")
      .setThumbnail("https://i.imgur.com/kKe9hzu.jpg")
      .addFields(
        { name: "Mentor", value: `${message.author.username}`, inline: true },
        { name: "Domain", value: "Web Development", inline: true },
        { name: "Github Link", value: `${options.githubLink}` },
        { name: "Join the voice channel", value: `${options.channelID}` }
      )
      .setTimestamp()
      .setFooter(
        "IEEE CS Accelerator Program 2020-21",
        "https://i.imgur.com/kKe9hzu.jpg"
      );
    let confirm = await message.channel.send({ embed: sessionStartEmbed });
  }
};
