const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UrlImageSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryName'
    },
    url: String
})

module.exports = mongoose.model('UrlImage', UrlImageSchema)