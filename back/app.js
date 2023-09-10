
const express = require('express')
const app = express()

var cors =require('cors');
app.use(cors());

app.post('/upload_img', function (req,res) {

    
    res.send('hello world');
})

app.listen(5000)