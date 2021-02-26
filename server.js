const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const client = new Discord.Client();

const axios = require('axios');

const prefix = "$";





client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', async (message) => {
    if (message.content === `${prefix}piyasa`) {

        const res = await axios.get("https://api.nomics.com/v1/currencies/ticker?key=" + process.env.NOMICS_API_KEY + "&ids=BTC,ETH,ADA,SXP,BNB,ALGO,NEO,TRYB&interval=1d,30d&convert=USDT&per-page=100&page=1")
            .then(response => {
                const res = response.data.map((el) => {
                    return el.id + " " + el.price + "\n \n"
                })
                return res
            })
            .catch(err => {
                return "Error fetching data from nomics", err
            })

        if (res) {
            message.channel.send(res)
        }
    }
    else if (message.content === `${prefix}saldır`) {
        const attackData = [
            "haddini bil lan",
            "ne demek lan sen kimsin mert e laf ediyorsun",
            "son duanı et koçum",
            "bekle şimdi ip adresini bulacam"
        ];
        let y = Math.random() * attackData.length;
        message.channel.send(attackData[y])
    }
    else if (message.content === `${prefix}avatar`) {
        const user = message.author;

        return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
    }
    else if (message.author.id === "465072241193779212") {
        const funnyData = [
            "neyse buranın tadı kaçtı",
            "biz de tam çıkıyorduk",
            "neyse beyler görüşürüz",
            "neyse sonra konuşuruz",
            "neyse beyler ben yemeğe gidiyorum",
            "buranın havastı bi değişti"
        ];
        let x = Math.trunc(Math.random() * funnyData.length)
        message.channel.send(funnyData[x])
    }
    else if (message.author.id === "450251843843522584") {
        message.channel.send("beyler içkisi olan var mı")
    }
    /* else if (message.author.id === "277462996782153728") {
        message.channel.send("mert haklı")
    } */
})






client.login(process.env.TOKEN_KEY);
