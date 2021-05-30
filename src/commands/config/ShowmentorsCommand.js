const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class ShowmentorsCommand extends BaseCommand {
  constructor() {
    super("showmentors", "config", []);
  }

  run(client, message, args) {
    let mentorRoleID = "mentor";
    let role = message.guild.roles.cache.find((r) => r.name === mentorRoleID);

    console.log(role.id);

    let mentorsCollection = role.members;
    let mentorsDetails = [];

    console.log(role.members);

    for (const [key, value] of mentorsCollection) {
      mentorsDetails.push({
        id: key,
        name: value.user.username,
      });
      message.channel.send(value.user.username);
    }
    console.log(mentorsDetails);
  }
};
