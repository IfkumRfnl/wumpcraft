require('dotenv').config();
const Discord = require('discord.js');
const { createData } = require('./src/data');
const CommandsHandler = require('./src/handlers/CommandsHandler.js');
const EventsHandler = require('./src/handlers/EventsHandler.js');

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.permLevel = require('./src/utils/permLevel');

function login() {
  client.login(process.env.TOKEN || 'Your Token Goes Here');
}

login();
createData();
new CommandsHandler(client).load();
new EventsHandler(client).load();

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});