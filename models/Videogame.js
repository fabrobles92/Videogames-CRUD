const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.model('videogames', new Schema({
    name: String,
    consoles: [],
    year: Number,
    description: String,
    photo: String
}))