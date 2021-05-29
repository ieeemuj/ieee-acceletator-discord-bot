const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("start", "sessions", ["s"]);
  }

  async run(client, message, args) {
    // from a webhook
    const options = {
      title: "Introduction",
      channelID: "<#847916638279827506>",
      githubLink: "https://github.com/manavendrasen/WEBTECHLAB-2021",
    };

    const sessionStartEmbed = new Discord.MessageEmbed()
      .setColor("#FCA315")
      .setAuthor(
        "IEEE CS Accelerator Program 2020-21",
        "https://i.imgur.com/kKe9hzu.jpg"
      )
      .setThumbnail("https://i.imgur.com/kKe9hzu.jpg")
      .addFields(
        { name: "Topic", value: `${options.title}` },
        { name: "Mentor", value: message.author.username, inline: true },
        { name: "Domain", value: "Web Development", inline: true },
        { name: "Repository", value: `${options.githubLink}` },
        {
          name: ":sparkles:  Join Voice Channel  ",
          value: `${options.channelID}`,
        }
      );
    let confirm = await message.channel.send({
      content: "@here",
      embed: sessionStartEmbed,
    });
  }
};
