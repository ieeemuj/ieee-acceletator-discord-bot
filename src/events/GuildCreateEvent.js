// db
const db = require("../db/firestore");

const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super("guildCreate");
  }

  async run(client, guild) {
    const mentorRole = "mentor";
    const role = guild.roles.cache.find((r) => r.name === mentorRole);
    const mentorRoleID = role.id;
    const mentorsCollection = role.members;
    let mentorsDetails = [];

    for (const [key, value] of mentorsCollection) {
      mentorsDetails.push({
        id: key,
        name: value.user.username,
      });
    }
    console.log(role);
    console.log(mentorsCollection);

    db.collection("guilds")
      .doc(guild.id)
      .set({
        guildID: guild.id,
        guildName: guild.name,
        prefix: "./",
        mentorRoleID: mentorRoleID,
        mentors: mentorsDetails,
        // have to be filled in the setup page
        voiceChannels: [
          {
            name: "accelerator-vc-1",
            id: "847916638279827506",
          },
          {
            name: "accelerator-vc-2",
            id: "848361374904221746",
          },
        ],
        setup: true,
      });
  }
};
