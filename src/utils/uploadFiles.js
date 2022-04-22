const FormData = require("form-data");
const fetch = require("node-fetch");
const path = require("path");
const basePath = process.cwd();
const fs = require("fs");

fs.readdirSync(`${basePath}/build/images`).
forEach(file => {
    const formData = new FormData();
    const fileStream = fs.createReadStream(`${basePath}/build/images/${file}`);
    formData.append("file",fileStream);
    let url = 'https://api.nftport.xyz/v0/files';

    let options = {
        method: 'POST',
        headers: {
            Authorization: '21049794-0166-44a9-9c7f-8a8175c3dca0'
        },
        body: formData
    };

  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      const fileName = path.parse(json.file_name).name;
      console.log(fileName);
      let rawdata = fs.readFileSync(`${basePath}/build/json/${fileName}.json`);
      let metaData = JSON.parse(rawdata);
      metaData.file_url = json.ipfs_url;
      fs.writeFileSync(`${basePath}/build/json/${fileName}.json`,
        JSON.stringify(metaData, null, 2));
      console.log(`${json.file_name} uploaded & ${fileName}.json updated!`);
    })
    .catch(err => console.error('error:' + err));
})
