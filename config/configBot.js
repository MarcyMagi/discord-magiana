const fs = require("fs")
const Command = require("../commands/classes/Command")
const path = require("path")

const settingsPath = path.resolve(__dirname, '../settings.json')


let raw = fs.readFileSync(settingsPath)
let settings = JSON.parse(raw)

module.exports = () => {
    Command.setConfig(settings["command-settings"])
}