const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
let Prefix = "!";
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
  
 if (cmd === `${Prefix}ping`) {
  const m = await message.channel.send("Ping?");
  m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`); 
}
});

client.login(process.env.token);
