module.exports = {
    login: function(client) {
        let token = process.env["DISCORD-TOKEN"]
        client.login(token)
        console.log("Running!")
    },
    
}