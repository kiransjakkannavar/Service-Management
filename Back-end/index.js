const express = require('express')
const app = express()
const {mongoose} = require('./config/db');
const {serviceController} = require('./app/controllers/service-controller')

const port = 3001
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('welcome')
})
app.use('/service', serviceController)

app.listen(port, ()=>{
    console.log('listening on port', port)
})