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
    python = removePrefix(msg.content)

    PythonShell.runString(python, null, function (err, results) {
      if (err) throw err;
      msg.channel.send(String(results))
      console.log('finished');
    });


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
