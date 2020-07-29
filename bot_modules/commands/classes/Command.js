const Argument = require("./Argument.js")
let config = null


allCommands = []
defaultArgument = new Argument()


//search in all commands the call that the user made
function commandFromCallMethod(callMethod) {
    for(let i = 0; i < allCommands.length; i++) {
        if(allCommands[i].callMethod == callMethod) {
            return allCommands[i]
        }
    }
}

function inTestCheck(command, msg) {

    if(command.inTest) {

        if(msg.guild.id == config["test-guild"]) {
            for(let i = 0; i < config["test-rooms"].length; i++) {
            
                if(msg.channel.id == config["test-rooms"][i]) {
                    return true
                }
            }
        }

        return false
    }

    return true
}


class Command {
    constructor(title, callMethod, workoutFunction, 
        helpMessage = undefined, args = defaultArgument) {
        
        this.title = title //name of the command
        this.callMethod = callMethod //what the user need to type after the prefix
        this.workoutFunction = workoutFunction //function that will be called
        this.helpMessage = helpMessage //basic descripition for use of the command
        this.arguments = args //instance of a argument object with the argument specs of the commamd
        this.inTest = false //commands in test will be only executable in the test channels (config)

        allCommands.push(this)

    }

    toggleTestPhase() {
        if(!this.inTest) 
            this.inTest = true
        else
            this.inTest = false
    }


    static get COMMANDS() {
        return allCommands 
    }

    //validate the prefix and the command call
    static validateCommand(msg) {
        let content = msg.content
        //get the prefix
        let msgPrefix = content[0]
    
        let prefixCheck = msgPrefix == config["default-prefix"]

        //skip if isn't calling the bot
        if(!prefixCheck)
            return
    
        //remove prefix
        content = content.substring(1)
    
        //get the suppost command and it Args
        let argsStr = content.split(" ")
    
        //split the command from Args
        let commandCall = argsStr.shift()
        
        let command = commandFromCallMethod(commandCall)

        //skip if isn't a valid command
        if(!command)
            return


        if(!inTestCheck(command, msg))
            return
        

        let argumentStatus = command.arguments.checkArguments(argsStr)

        //check if arguments are ok
        if(argumentStatus == Argument.STATUS.OK)
            command.workoutFunction(msg, ...argsStr) //execute the command
        else 
            command.arguments.errorReply(argumentStatus) //return a response if arguments are wrong
    
    }


    static setConfig(s) {
        config = s
    }


}


module.exports = Command