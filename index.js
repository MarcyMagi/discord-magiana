const discord = require("discord.js")
const discordConnection = require("./config/discordConnection")
const commandsInit = require("./config/commandsInitialization")
const configBot = require("./config/configBot")
const { commandListener } = require("./config/commandsInitialization")

configBot()

let client = new discord.Client()

discordConnection.login(client)
commandsInit.createCommands()
commandsInit.commandListener(client)