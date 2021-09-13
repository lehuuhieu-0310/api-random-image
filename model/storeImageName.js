const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeImageName = new Schema({
    id: Number,
    fileName: String
})

module.exports = mongoose.model('imageName', storeImageName)