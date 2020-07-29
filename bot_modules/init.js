const fs = require("fs")
const Command = require("./commands/classes/Command")

//getting config data from file
let rawConfigData = fs.readFileSync("config.json")
const config = JSON.parse(rawConfigData)



module.exports = {

    login: function(client) {
        let token = process.env["DISCORD-TOKEN"]
        client.login(token)
        console.log("Running!")
    },


    // ---- MAYBE WILL CHAGNGE ----
    initCommands: function() {
        
        Command.setConfig(config['command-settings'])

        function testF(msg) {
            console.log(msg)
        }
        
        let test = new Command("Test", "test", testF, "")
        test.toggleTestPhase()
    },

    commandListener: function(client){
        client.on("message", msg => {

            Command.validateCommand(msg)

        })
    }

}