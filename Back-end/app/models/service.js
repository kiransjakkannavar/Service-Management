const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 3000
    }
    
})
const Service = mongoose.model('service', serviceSchema)
module.exports = {
    Service
}