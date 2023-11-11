const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection } = require(`discord.js`);
const fs = require('fs');
const terminal = require('./terminal')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 

client.commands = new Collection();
client.prefixCommands = new Collection();

require('dotenv').config();
if (!process.env.token) terminal.error('Exiting, no token is set') && process.exit(1);

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/chatCommands");
const prefixFolders = fs.readdirSync("./src/prefixCommands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    terminal.info('Logging in...')
    client.handleEvents(eventFiles);
    client.handleCommands(commandFolders);
    client.handlePrefixes(prefixFolders)
    client.login(process.env.token)
})();







