const Database = require('../db class')
module.exports = {
    "name": "language",
    "description": "Change bot's language",
    exec(client, message, args) {
        console.log(args[0])
        if (!args[0]) {
            message.reply('available languages: en, ru')
            return 0
        }
        switch (args[0]) {
            case 'en':
                break
            case 'ru':
                break
            default:
                message.reply('available languages: en, ru')
                break
        }
        var db = Database.get_database('servers.json')
        db['servers'][message.guild.id] = {
            'language': args[0]
        }
        Database.set_database('servers.json', db)
        message.reply(`set language to: ${args[0]}`)
    }
}