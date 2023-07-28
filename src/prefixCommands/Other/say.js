module.exports = {
    name: 'say',
    async execute(message, options = {}) {
        if (!options.args || !typeof options.args === String || options.args.length < 1) return await message.reply({ content: 'Please give me something to say!' });
        await message.reply({content: `You said ${options.args}\nMessage Array: [${options.argsArray}]` });
    }
}