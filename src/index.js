require("dotenv").config();
const { Client } = require("discord.js");
const { registerCommands, registerEvents } = require("./utils/registry");
const client = new Client();

(async () => {
  client.commands = new Map();
  client.events = new Map();

  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.login(process.env.TOKEN);
})();
