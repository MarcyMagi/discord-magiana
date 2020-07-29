const discord = require("discord.js")

let client = new discord.Client()

const init = require("./bot_modules/init")


init.login(client)


init.initCommands()

//Starts to listen channels
init.commandListener(client)