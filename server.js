const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const client = new Discord.Client();

const axios = require('axios');

const prefix = "$";
client.login(process.env.TOKEN_KEY);

client.on('ready', () => {
    let testChannel = client.channels.cache.get('804680324947902475');
    setInterval(async () => {

        const res = await axios.get("https://api.nomics.com/v1/currencies/ticker?key=" + process.env.NOMICS_API_KEY + "&ids=BTC,ETH,CHZ,KAVA,SXPTRYB&interval=1d,30d&convert=USDT&per-page=100&page=1")
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
            testChannel.send("** " + res + " **")
        }
    }, 300000)
})

client.on('message', async (message) => {
    if (message.content === `sa`) {
        message.channel.send("aleyküm selam")
    }
    else if (message.content === `${prefix}saldır`) {
        const attackData = [
            "haddini bil lan",
            "ne demek lan sen kimsin mert e laf ediyorsun",
            "son duanı et koçum",
            "bekle şimdi ip adresini bulacam"
        ];
        let y = Math.trunc(Math.random() * attackData.length)
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
    /* else if (message.author.id === "277462996782153728") {
        message.channel.send("mert haklı")
    } */
})






