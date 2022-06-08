const mongoose = require("mongoose")
const {Schema} = mongoose

mongoose.model('pictures', new Schema({
    profileImg: {
        type: String
    }
}))
