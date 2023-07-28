const terminal = require('../terminal')

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (interaction.isChatInputCommand()) terminal.info(`${interaction.user.username} (${interaction.user.id}) | ${interaction.guild.name} ${interaction.guild.id} > [ ${interaction} ]`)
        if (interaction.isUserContextMenuCommand()) terminal.info(`${interaction.user.username} (${interaction.user.id}) | ${interaction.guild.name} (${interaction.guild.id}) > [ ${interaction.commandName} ] > [ ${interaction.targetUser.username} ]`)
        if (interaction.isMessageContextMenuCommand()) terminal.info(`${interaction.user.username} (${interaction.user.id}) | ${interaction.guild.name} (${interaction.guild.id}) > [ ${interaction.commandName} ] > [ ${interaction.targetMessage.id} (Message from ${interaction.channel.id}) ]`)
        if (interaction.isButton()) terminal.info(`${interaction.user.username} (${interaction.user.id}) | ${interaction.guild.name} ${interaction.guild.id} > [ ${interaction.customId} ] (Button)`)
        if (interaction.isAnySelectMenu()) terminal.info(`${interaction.user.username} (${interaction.user.id}) | ${interaction.guild.name} ${interaction.guild.id} > [ ${interaction.customId} ] (Select Menu) Value: ${interaction.fields}`)
        if (interaction.isModalSubmit()) terminal.info(`${interaction.user.username} (${interaction.user.id}) | ${interaction.guild.name} ${interaction.guild.id} > [ ${interaction.customId} ] (Modal) Values: ${Object.keys(interaction.fields).map(key => interaction.fields.getTextInputValue(fields[key].customId))}`)
    }
}