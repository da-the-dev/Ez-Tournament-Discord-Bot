const fs = require('fs');

module.exports = {
    get_database(path) {
        return JSON.parse(fs.readFileSync(process.cwd() + '/' + path).toString())
    },
    set_database(path, data) {
        fs.writeFile(process.cwd() + '/' + path, JSON.stringify(data, null, 2), err => {
            if (err) {throw `\n${err}`}
        })
    }
}