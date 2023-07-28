module.exports = {
    name: 'say',
    async execute(message, options = {}) {
        if (!options.args || !typeof options.args === String || options.args.length < 1) return await message.reply({ content: 'Please give me something to say!' });
        await message.channel.send({content: `You said ${options.args}\nMessage Array: [${options.argsArray}]\nMessage sent by ${message.author}` });
        await message.delete();
    }
}