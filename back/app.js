
const express = require('express')
const app = express()

var fileupload = require('express-fileupload')
app.use(fileupload());
app.use(express.static('upload_img'));
app.use(express.static('upload_img_no_bg'));
app.use(express.static('upload_img_color'));

var cors =require('cors');
app.use(cors());

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

app.post('/upload_img', function (req,res) {

    console.log(req.files);
    let time = new Date().getTime();
    let fileName = time+"_"+req.files.UploadFile.name;

    req.files.UploadFile.mv(`${__dirname}/upload_img/${fileName}`, err =>{       
        
        if(err) {
            return res.status(500).send(err);
        } else{

            // ***********************

            

            const inputPath = `${__dirname}/upload_img/${fileName}`;
            const formData = new FormData();
            formData.append('size', 'auto');
            formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));

            axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {
                ...formData.getHeaders(),
                'X-Api-Key': 'R9xDaZbcCZSTWxCiucLUGtwy',
            },
            encoding: null
            })
            .then((response) => {
            if(response.status != 200) return console.error('Error:', response.status, response.statusText);
            
            (async ()=>{
            fs.writeFileSync(`${__dirname}/upload_img_no_bg/no_bg_${fileName}`, response.data);
            }) ();
            res.send(fileName);
           
        })
            .catch((error) => {
                return console.error('Request failed:', error);
            });


            // ***********************


            
        }
    })

app.post('uplod_image_color',function (req, res){

    let fileName = req.body.uploadFileName;
    let color=req.body.color;
    
    const inputPath=`${__dirname}/opload_img_no_bg/${fileName}`;
    const formData=new FormData();
    formData.append('size', 'auto');
    formData.append('image_file',fs.createReadStream(inputPath),path.basename(inputPath));
    formData.append('bg_color', color);
    axios({
        method : 'post',
        url : 'https://api.remove.bg/v1.0/removebg',
        data : formData,
        responseType: 'arraybuffer',
        header: {
            ...formData.getHeaders(),
            'X-Api-Key': 'HJi4YytfoEUoJtX9PDdYu17o',
        },
        encoding:null
    })
    .then((response) => {
        if(response.status != 200) return console.error('Error:', respose.status, response.statusText);

        (async ()=> {
            fs.writevSync(`${__dirname}/opload_img_color/color_${fileName}`, response.data);
        })();
        res.send('color'+fileName);
    })
    .catch((error) =>{
        return console.error('Reques failed:', error)
    })
})

})

app.listen(5000)