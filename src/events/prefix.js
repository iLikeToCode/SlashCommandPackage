const terminal = require('../terminal')

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.author.bot) return;
        if (!message.content.startsWith(`${process.env.prefix}`)) return;

        const command = client.commands.get(message.content.split(`${process.env.prefix}`)[1]);

        if (!command) return;

        try {
            await command.execute(message);
        } catch (error) {
            terminal.error(error);
            await message.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true
            });
        }
    },
};