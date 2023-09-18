

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

module.exports = async function send_to_api(fileName , color='' , fileNameDes ) {

    console.log(fileName);
    console.log(color);
    console.log(fileNameDes);

  const inputPath = fileName; //`${__dirname}/upload_img_no_bg/${fileName}`;
  const formData = new FormData();
  formData.append('size', 'auto');
  formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));


  console.log('color:' + color);

  if(color!='') {
    formData.append('bg_color', color);
  }


await axios({
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    data: formData,
    responseType: 'arraybuffer',
    headers: {
      ...formData.getHeaders(),
      'X-Api-Key': 'Bgg59zV25HmycpJsoBFswTiW',
    },
    encoding: null
  })
  .then((response) => {
    if(response.status != 200) return console.error('Error:', response.status, response.statusText);

    (async () => {
      fs.writeFileSync( fileNameDes /*`${__dirname}/upload_img_color/color_${fileName}`*/, response.data);
    }) ();
    return 'color_'+fileName;

  })
  .catch((error) => {
      return console.error('Request failed:', error); 
  });

}