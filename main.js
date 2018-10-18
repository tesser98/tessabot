const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
let Prefix = "!";
let messageArray = msg.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
  
 if (cmd === `${Prefix}ping`) {
 async function EditMessage() {
    const m = await msg.channel.send("Ping?");
    return m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`); 
}
 }
});

client.login(process.env.token);
