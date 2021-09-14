const express = require('express')
const app = express()
require('dotenv').config()

require('./db/index')()
const route = require('./routes/index')

const port = process.env.PORT || 3000

route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})