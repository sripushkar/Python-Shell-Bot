require('dotenv').config();
const Discord = require('discord.js');
let {PythonShell} = require('python-shell')
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if(isCommand(msg.content)){
    python = formatMsg(msg.content)

    PythonShell.runString(python, null, function (err, results) {
      if (err){
        msg.channel.send(String(err));
      }
      else{
        msg.channel.send(String(results))
      }
      console.log('finished');
    });
  }
});

function isCommand(str){
  if(str.substring(0,1) === ">"){
    return true;
  }
  return false;
}

function formatMsg(str){
  newStr = str.substring(1)
  newStr = newStr.replace("’", "'");
  newStr = newStr.replace("“", "\"");
  newStr = newStr.replace("”", "\"");
  return newStr;
}
