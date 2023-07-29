const terminal = require('../terminal')

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.author.bot) return;
        if (!message.content.startsWith(`${process.env.prefix}`)) return;

        const command = client.prefixCommands.get(message.content.split(process.env.prefix)[1].split(' ')[0]);

        if (!command) return;

        terminal.info(`${message.author.username} (${message.author.id}) | ${message.guild.name} (${message.guild.id}) > [ ${message.content} ]`)

        try {
            let args = message.content.split(process.env.prefix)[1].split(command.name)[1];
            // below code removes that first space
            let m;const regex = /\s(.*)/gm;while ((m = regex.exec(args)) !== null) {if (m.index === regex.lastIndex) {regex.lastIndex++;}args = m[1];}
            let argsArray = args.split(' ');
            await command.execute(message, { args, argsArray });
        } catch (error) {
            terminal.error(error.stack);
            await message.reply({
                content: 'There was an error while executing this command!'
            });
        }
    },
};