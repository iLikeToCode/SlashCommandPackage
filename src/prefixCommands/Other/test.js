module.exports = {
    name: 'test',
    async execute(message) {
        await message.reply('To remove this command, delete the file under prefixCommands/Other/test.js\nOtherwise, use it as an example of how to make your own commands.')
    }
}