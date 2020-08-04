const Command = require("../commands/classes/Command")

module.exports = {

    createCommands: function() {

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