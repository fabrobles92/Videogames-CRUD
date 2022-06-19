const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.model('videogames', new Schema({
    name: String,
    consoles: Array,
    year: Number,
    description: String,
    photo: {
        type: JSON,
        data: Buffer,
        contentType: String,
        default: {data: Buffer.from([]), contentType: ''}
    }
}))