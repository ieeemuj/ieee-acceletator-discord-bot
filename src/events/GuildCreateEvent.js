// db
const db = require("../db/firestore");

const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super("guildCreate");
  }

  async run(client, guild) {
    db.collection("guilds")
      .doc(guild.id)
      .set({
        guildID: guild.id,
        guildName: guild.name,
        prefix: "./",
        mentorID: "847916638279827506",
        voiceChannels: [
          {
            name: "accelerator-vc-1",
            id: "847916638279827506",
          },
        ],
      });
  }
};
