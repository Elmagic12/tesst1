const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("589930341368856578")
setInterval(function() {
channel.send(`elmagic elmagic elmagic elmagic elmagic`);
}, 30)
})

client.login(process.env.BOT_TOKEN);