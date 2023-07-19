module.exports = {
    name: 'test',
    async execute(message, args) {
        let messagecontent = args.split(' ')
        await message.reply(`You said ${messagecontent}`)
    }
}