const Discord = require('discord.js')
const dotenv = require('dotenv').config()
const fs = require('fs')
const Database = require('./db class')

const config = require('./cfg/config.json')


var client = new Discord.Client()
client.commands = new Discord.Collection()

client.login(process.env.DISCORD_EZ_TOURNAMENT_TOKEN)
    .catch(console.error)

client.once('ready', () => {
    var commands = fs.readdirSync('./commands').filter(c => c.endsWith('.js'))
    commands.forEach(c => {
        const command = require(`./commands/${c}`)
        client.commands.set(command.name, command)
    })
    console.log('Bot is now ready!')
})

client.on('message', message => {
    if (message.content.startsWith(config.prefix)) {
        var args = message.content.split(' ')
        var command = args.shift().slice(1)

        

        client.commands.forEach(c => {
            if (command == c.name)
                c.exec(client, message, args)
        })
    }
})