const randomImageRouter = require('./randomImage')

function route(app) {
    app.get('/', (req, res) => {
        res.send('url/IU: image of IU, url/suzy: image of suzy')
    })
    app.use('/', randomImageRouter)
}


module.exports = route