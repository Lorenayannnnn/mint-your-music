const fetch = require("node-fetch");
const path = require("path");
const basePath = process.cwd();
const fs = require("fs");
const buildDir = path.join(basePath, '/build');

if (!fs.existsSync(path.join(buildDir, "/genericJson"))) {
    fs.mkdirSync(path.join(buildDir, "genericJson"));
}

fs.readdirSync(`${buildDir}/json`).
forEach(file => {
    if (file !== '_metadata.json') {
        const jsonFile = JSON.parse(fs.readFileSync(`${buildDir}/json/${file}`));
        jsonFile.name = "unknown";
        jsonFile.description = "unknown";
        jsonFile.file_url = "https://ipfs.io/ipfs/bafkreihuqazidioj6pewqzm4gbawgsjoxeod6r4umkbvsehyfoj3vnl5ya";
        delete jsonFile.attributes;
        delete jsonFile.custom_fields.dna;

        fs.writeFileSync(`${buildDir}/genericJson/${file}`, JSON.stringify(jsonFile, null, 2));
        console.log(`${file} is uploaded and updated!`);
    }
})