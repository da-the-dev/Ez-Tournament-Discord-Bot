module.exports = {
    "name": "language",
    "description": "Change bot's language",
    exec(client, message, args) {
        if (args.length <= 0)
            message.reply()
    }
}