const express = require('express')
const app = express()
const axios = require('axios').default
require('dotenv').config()

const storeImageName = require('./model/storeImageName')
require('./db/index')()

const port = process.env.PORT

app.get('/', async (req, res) => {
    const image = await storeImageName.aggregate([{ $sample: { size: 1 } }])
    const fileName = image.map((x) => x.fileName)
    res.status(200).json({ image_url: `${process.env.URL_IMAGE}/${fileName}` })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})