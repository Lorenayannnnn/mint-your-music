const fetch = require("node-fetch");
const path = require("path");
const basePath = process.cwd();
const fs = require("fs");

const ipfsMetas = JSON.parse(fs.readFileSync(`${basePath}/build/json/_ipfsMetas.json`));
fs.writeFileSync(`${basePath}/build/minted.json`, "");

fs.writeFileSync(`${basePath}/build/json/minted.json`, "");
const writer = fs.createWriteStream(`${basePath}/build/json/minted.json`, {
    flags: "a"
})

writer.write("[");
let fileCount = ipfsMetas.length;

// fs.readdirSync(`${basePath}/build/images`).
ipfsMetas.forEach(meta => {
    let url = 'https://api.nftport.xyz/v0/mints/customizable';

    const mintInfo = {
        chain: "rinkeby",
        contract_address: "0xa7d9bc5df85898cc0ecd55aa178a6efd887ebf57",
        metadata_uri: meta.metadata_uri,
        mint_to_address: "0x306804ECC1CCcB522DB436Ab141A8886189475C2",
        token_id: meta.custom_fields.edition
    }

    let options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: '21049794-0166-44a9-9c7f-8a8175c3dca0'
        },
        body: JSON.stringify(mintInfo)
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
            console.log(`Minted ${json.transaction_external_url}`)
        })
})