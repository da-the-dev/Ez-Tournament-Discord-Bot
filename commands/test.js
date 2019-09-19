const Database = require('../db class')
const fs = require('fs')
module.exports = {
    "name": "test",
    "description": "",
    exec(client, msg, args) {
        msg.channel.send(`Hello, ${msg.author}! Select your language with \`.language\``)
        var tempDb = Database.get_database('servers.json')
        tempDb['servers'][msg.guild.id] = {
            'language': 'en',
            'createdGroups': [{
                "userid": "315339158912761856"
            }]
        }
        Database.set_database('servers.json', tempDb)

        
    }
}