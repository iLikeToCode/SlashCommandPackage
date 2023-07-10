const { REST } = require("@discordjs/rest");
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const terminal = require('../terminal')

const clientId = process.env.clientId;

module.exports = (client) => {
    client.handleCommands = async (commandFolders) => {
        client.commandArray = [];
        for (folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./src/chatCommands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../chatCommands/${folder}/${file}`);
                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data.toJSON());
            }
        }

        const rest = new REST({
            version: '9'
        }).setToken(process.env.token);

        (async () => {
            try {
                terminal.info('Started refreshing application (/) commands.');

                await rest.put(
                    Routes.applicationCommands(clientId), {
                        body: client.commandArray
                    },
                );

                terminal.success('Successfully reloaded application (/) commands.');
            } catch (error) {
                terminal.error(error.stack);
            }
        })();
    };
};