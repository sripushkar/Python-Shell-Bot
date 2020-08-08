# Python-Shell-Bot
### A Discord bot which brings a Python Shell into your Discord server.

Python Shell Bot is a bot built with node.js that brings adds a Python Shell into a server. This is mostly for fun, and does not support input(yet).

### Add the bot:
You can add the bot with this link: https://discord.com/api/oauth2/authorize?client_id=741330217351643176&permissions=10240&scope=bot
### To build manually 
You will need the following installed:
* node.js
* npm

Download this repo, and create a .env file. Then create a discord bot account, and add the bot token in the .env file like this: 

`TOKEN = [your token here]`

Then to install the dependencies, use 

`npm install`

To run the bot, use 

`node bot.js`

### To use the bot:
Start off with >>, then your python command. For example: >>print("hello") will make the bot send 'hello' in the server. To use multiple lines, you can either enter using a new line in the message, or seperate your statements with a semicolon. For example: >>print("Hello"); print("World")

