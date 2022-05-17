const discord = require('discord.js');
const client = new discord.Client({
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES,
        discord.Intents.FLAGS.GUILD_MEMBERS,
    ]
});

const config = require('./config.json');
const fs = require('fs');
const path = require('path');

const eventsDir = fs.readdirSync(path.join(__dirname, 'events'));
for (const file of eventsDir) {
    const em = require(`./events/${file}`);
    client[em.type](em.name, (...args ) => em.handler(client, ...args));
}

client.login(config.token);