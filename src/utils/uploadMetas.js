const fetch = require("node-fetch");
const path = require("path");
const basePath = process.cwd();
const fs = require("fs");

fs.writeFileSync(`${basePath}/build/json/_ifpsMetas.json`, "");
const writer = fs.createWriteStream(`${basePath}/build/json/_ipfsMetas.json`, {
    flags: "a"
})

writer.write("[");
const readDir = `${basePath}/build/genericJson`;
// -2 to Skip metadata.json & ipfs.json
// let fileCount = fs.readdirSync(readDir).length - 2;
let fileCount = fs.readdirSync(readDir).length;


// fs.readdirSync(`${basePath}/build/images`).
fs.readdirSync(`${readDir}`).
forEach(file => {
    if (file === '_metadata.json' || file === '_ipfsMetas.json') {
        return;
    }

    const jsonFile = fs.readFileSync(`${readDir}/${file}`);

    let url = 'https://api.nftport.xyz/v0/metadata';

    let options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: '21049794-0166-44a9-9c7f-8a8175c3dca0'
        },
        body: jsonFile
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => {
            writer.write(JSON.stringify(json, null, 2));
            --fileCount;
            if (fileCount === 0) {
                writer.write("]");
                writer.end();
            } else {
                writer.write(",\n");
            }
            console.log(`${json.name} metadata uploaded & added to _ipfsMetas.json!`)
        })
})