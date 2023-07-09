const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Test command'),
    async execute(interaction) {
        await interaction.reply('To remove this command, delete the file under chatCommands/Other/test.js\nOtherwise, use it as an example of how to make your own commands.')
    }
}