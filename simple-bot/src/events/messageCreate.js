const config = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "messageCreate",
    type: "on",
    handler: (_, message) => {
        const content = message.content;

        if (!content.startsWith(config.prefix)) {
            return;
        }
    
    
    
        const args = content.slice(config.prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    
        switch(command) {
            case 'ping':
                message.channel.send({ content: "pong" })
                break;
            case 'say':
                message.channel.send({ content: args.join(' ') })
                break;
            case 'embed':
                const embed = new MessageEmbed({ 
                    image: {
                        url: "https://cdn.discordapp.com/attachments/976195379026604032/976230876662857788/secure-shield.png"
                    },
                    title: "Embed title",
                    description: args.join(' '),
                    color: "#4fd6ff",
                 })
                message.channel.send({ embeds: [embed] })
        }
    }
}