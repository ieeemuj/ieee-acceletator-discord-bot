const Discord = require("discord.js");
const BaseCommand = require("../../utils/structures/BaseCommand");
const { google } = require("googleapis");
const db = require("../../db/firestore");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("attendance", "sessions", ["a"]);
  }

  async run(client, message, args) {
    // get all the details of the guild
    const result = await db.collection("guilds").doc(message.guild.id).get();

    // find the details of the mentor
    const mentor = result
      .data()
      .mentors.find((mentor) => mentor.id == message.author.id);

    // get the channel
    const channel = message.guild.channels.cache.find(
      (c) => c.id === mentor.channel
    );

    let attendees = [];

    for (const [memberID, member] of channel.members) {
      // console.log(member.displayName);
      if (memberID != message.author.id) {
        attendees.push(member.displayName);
      }
    }

    // attendee count if just the mentor joins
    let attendeeCount =
      channel.members.size === 0 ? 0 : channel.members.size - 1;

    attendees.filter((attendee) => attendee == message.author.nickname);

    // if anyone joined the meeting, else no need to give attendance
    // if (attendeeCount > 0) {
    //   const auth = new google.auth.GoogleAuth({
    //     keyFile: "googleApiCredentials.json",
    //     scopes: "https://www.googleapis.com/auth/spreadsheets",
    //   });

    //   // Create client instance for auth
    //   const sheetsClient = await auth.getClient();

    //   // Instance of Google Sheets API
    //   const googleSheets = google.sheets({
    //     version: "v4",
    //     auth: sheetsClient,
    //   });

    //   // get the spreadsheet if from the spreadsheet url
    //   const spreadsheetId = process.env.SPREADSHEETID;

    //   // Get metadata about spreadsheet
    //   const metaData = await googleSheets.spreadsheets.get({
    //     auth,
    //     spreadsheetId,
    //   });

    //   console.log(metaData.data);
    // }

    const attendanceEmbed = new Discord.MessageEmbed()
      .setColor("#FCA315")
      .setAuthor(
        "IEEE CS Accelerator Program 2020-21",
        "https://i.imgur.com/kKe9hzu.jpg"
      )
      .setDescription(
        `Attendance has been recorded! \n **${attendeeCount}** members attended the session`
      );
    message.channel.send({
      embed: attendanceEmbed,
    });

    const attendanceResponseEmbed = new Discord.MessageEmbed()
      .setColor("#FCA315")
      .setAuthor(
        "IEEE CS Accelerator Program 2020-21",
        "https://i.imgur.com/kKe9hzu.jpg"
      )
      .setDescription(
        `Attendance has been recorded! \n **${attendeeCount}** members attended the session`
      )
      .addFields(
        { name: "Attendees", value: `${attendees.join("\n")}` },
        { name: "Date", value: `${new Date()}` }
      );

    message.author.send({
      embed: attendanceResponseEmbed,
    });
  }
};
