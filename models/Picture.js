const mongoose = require("mongoose")
const {Schema} = mongoose

mongoose.model('pictures', new Schema({
    img: {
        data: Buffer,
        contentType: String
    }
}))
