global.channelid
const Database = require('../db class.js')
const get_language = require('../get_language.js')
module.exports = {
    'name': 'group',
    async exec(client, message, args) {
        var language = get_language.get_language(message)
        var db = Database.get_database('servers.json')
        let con = true
        db['servers'][message.guild.id]['createdGroups'].forEach(g => {
            if (g['userid'] == message.author.id) {
                message.reply(`${language.alreadyHaveAGroup}`)
                con = false
            }
        })
        if (!con) {return 0}
        if (!args[0]) {
            message.reply(language.groupNameUnspecified)
            return 0
        }
        
        var channelid = await message.guild.createChannel(args[0], {   
            type: 'text',
            permissionOverwrites: [{
                id: message.guild.id,
                deny: ['VIEW_CHANNEL']
            },
            {
                id: message.author.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
            }]
        }).then(channel => {
            message.mentions.users.forEach(u => {
                channel.overwritePermissions(u, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true
                })
            })
            return channel.id
        })
        db['servers'][message.guild.id]['createdGroups'].push({
            'channelid': channelid,
            'userid': message.author.id
        })
        Database.set_database('servers.json', db)
        message.reply(`${language.successfulyCreatedTheGroupNamed} '${args[0]}'!`)
    }
}