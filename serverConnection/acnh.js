const axios = require("axios")

module.exports = {
    addProfile: async function(profile) {
        profile = {
            id: "300",
            name: "Doka",
            island: "Tech Pars",
            fruit: "Pear",
            flower: "Windflower",
            photo_dir: "C:/photo.png",
            fc: "AB-1234-5678-9012"
        }

        axios.post("http://127.0.0.1:3000/acnh/addProfile/", profile).then((res) => {
            let data = res.data
            return(data)
        }).catch((err) => {
            console.log(err)
        })

    },

    getProfile: async function(method, value) {
        axios.post("http://127.0.0.1:3000/acnh/getProfile/", 
        {
            method: method,
            value: value
        }
        
        ).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
}