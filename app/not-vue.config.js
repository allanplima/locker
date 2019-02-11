const fs = require('fs')

module.exports = {
    devServer: {
        hot: true,
        disableHostCheck: true,
        https: {
            key: fs.readFileSync('./ssl/server.key'),
            cert: fs.readFileSync('./ssl/server.crt'),
            ca: fs.readFileSync('./ssl/rootCA.pem')
        },
        open: true
    }
}