const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', msg => {
    if (msg.content === "ytd") {
        msg.reply("aynen ytd");
    }
})

client.login('ODE0NTA2MDMwODU5Mjg4NjU2.YDe12g.inJzwSIDHnmo5P_RusxdVAMJJPc');