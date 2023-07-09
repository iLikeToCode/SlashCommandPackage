const fs = require('fs');
const terminal = require('../terminal')

const clientId = process.env.clientId;

module.exports = (client) => {
    client.handlePrefixes = async (prefixFolders) => {
        if (!process.env.prefix) return terminal.warn('No prefix set in .env, disabling prefix module.')

        try {
            terminal.info(`Started refreshing prefix (${process.env.prefix}) commands.`);

            client.prefixArray = [];
            for (folder of prefixFolders) {
                const commandFiles = fs.readdirSync(`./src/prefixCommands/${folder}`).filter(file => file.endsWith('.js'));
                for (const file of commandFiles) {
                    const command = require(`../prefixCommands/${folder}/${file}`);
                    client.prefixCommands.set(command.name, command);
                    client.prefixArray.push(command.name);
                }
            }

            terminal.success(`Successfully reloaded prefix (${process.env.prefix}) commands.`);
        } catch (error) {
            terminal.error(error);
        }
    };
};