const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/upbeat',{useNewUrlParser:true}).then(()=>{
    (console.log('connected to db'))
}).catch((err)=>{
    console.log('Error connecting to db', err)
})
module.exports = {
    mongoose
}