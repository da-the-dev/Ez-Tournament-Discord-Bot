const Database = require('./db class.js')
module.exports = {
    get_language(message) {
        var db = Database.get_database('servers.json')
        var language = db['servers'][message.guild.id]['language']
        switch (language) {
            case 'en':
                return require('./translations/en.json')
            case 'ru':
                return require('./translations/ru.json')
        }
    }
}