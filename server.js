const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', msg => {
    if (msg.content === "ytd") {
        msg.reply("aynen ytd");
    }
})

client.login(process.env.TOKEN_KEY);
