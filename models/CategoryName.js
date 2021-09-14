const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategoryNameSchema = new Schema({
    name: String,
})

module.exports = mongoose.model('CategoryName', CategoryNameSchema)