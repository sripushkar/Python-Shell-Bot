require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});


bot.on('message', msg => {
  if(isCommand(msg.content)){
    reply = removePrefix(msg.content)
    msg.channel.send(reply)
  }
});

function isCommand(str){
  if(str.substring(0,3) === ">>>"){
    return true;
  }
  return false;
}

function removePrefix(str){
  return str.substring(3);
}
