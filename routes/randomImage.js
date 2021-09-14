const express = require('express')
const route = express.Router()

const categoryName = require('../models/CategoryName')
const urlImage = require('../models/UrlImage')

route.get('/:name', async (req, res) => {
    const name = req.params.name
    const { _id } = await categoryName.findOne({ name })
    const listImage = await urlImage.find({ id: _id })
    const randomItem = listImage[Math.floor(Math.random() * listImage.length)]
    res.status(200).json({ 'image_url': `${process.env.URL_IMAGE}/${name}/${randomItem.url}` })
})

module.exports = route