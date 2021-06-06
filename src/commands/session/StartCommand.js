const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
const db = require("../../db/firestore");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("start", "sessions", ["s"]);
  }

  async run(client, message, args) {
    // get all the details of the guild
    const result = await db.collection("guilds").doc(message.guild.id).get();

    // find the details of the mentor
    const mentor = result
      .data()
      .mentors.find((mentor) => mentor.id == message.author.id);

    // Embed message
    const sessionStartEmbed = new Discord.MessageEmbed()
      .setColor("#FCA315")
      .setAuthor(
        "IEEE CS Accelerator Program 2020-21",
        "https://i.imgur.com/kKe9hzu.jpg"
      )
      .setThumbnail("https://i.imgur.com/kKe9hzu.jpg")
      .addFields(
        // { name: "Topic", value: `${options.title}` },
        { name: "Mentor", value: `${mentor.name}`, inline: true },
        { name: "Domain", value: `${mentor.domain}`, inline: true },
        // { name: "Repository", value: `${options.githubLink}` },
        {
          name: ":sparkles:  Join Voice Channel  ",
          value: `<#${mentor.channel}>`,
        }
      );
    let confirm = await message.channel.send({
      content: "@here",
      embed: sessionStartEmbed,
    });
  }
};
