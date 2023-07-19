const terminal = require('../terminal')

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.author.bot) return;
        if (!message.content.startsWith(`${process.env.prefix}`)) return;
        terminal.info(`${message.author.username} (${message.author.id}) | ${message.guild.name} (${message.guild.id}) > [ ${message.content} ]`)

        const command = client.prefixCommands.get(message.content.split(process.env.prefix)[1]);

        if (!command) return;

        try {
            const args = message.content.split(process.env.prefix)[1].split(' ')
            args.slice(0)
            await command.execute(message, args);
        } catch (error) {
            terminal.error(error);
            await message.reply({
                content: 'There was an error while executing this command!'
            });
        }
    },
};