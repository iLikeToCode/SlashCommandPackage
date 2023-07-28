const terminal = require('../terminal')

module.exports = (client) => {
    client.handleEvents = async (eventFiles) => {
        terminal.info('Starting to load events...')
        try {
            for (const file of eventFiles) {
                const event = require(`../events/${file}`);
                if (event.once) {
                    client.once(event.name, (...args) => event.execute(...args, client));
                } else {
                    client.on(event.name, (...args) => event.execute(...args, client));
                }
            }
            terminal.success('Sucessfully loaded all events!')
        } catch(error) {
            terminal.error(error)
        }
    }
}