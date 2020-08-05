const Command = require("../commands/classes/Command")
const anch = require("../serverConnection/acnh")

module.exports = {

    createCommands: function() {

        anch.getProfile("discord_id", "300")

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