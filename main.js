const discord = require("discord.js")

let client = new discord.Client()

const init = require("./bot_modules/init")


//Use the Token to do the login
init.login(client)


init.initCommands()

//Starts to listen the chats
init.commandListener(client)