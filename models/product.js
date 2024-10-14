const mongoose = require('mongoose')


const ObjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    valeur: {
        type: Number,
        required: true
    },
})
module.exports = ObjectSchema;