const servers = require(`${process.cwd()}/cfg/servers.json`)
const fs = require('fs')
module.exports = {
    "name": "test",
    "description": "",
    exec(client, msg, args) {
        msg.channel.send(`Hello, ${msg.author}! Select your language with \`.language\``)
        
        servers[msg.guild.id] = {
            "language": "en"
        }
        fs.writeFileSync(`${process.cwd()}/cfg/servers.json`, JSON.stringify(servers, null, 2))
    }
}