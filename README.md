# mint-your-music

> Music-Blockchain side project

## Overall Steps
1. Login with Metamask
   1. Get metamask address
   2. Use API key to deploy a contract & create a collection for the user [API doc](https://docs.nftport.xyz/docs/nftport/b3A6MjEyNTYxMzE)
3. Ask for song info
   1. Artist name of the user
   2. Song Title Song description
7. Upload cover image --> save to target directory
8. Upload mp3 file --> save to target directory
9. Mint:
   1. `npm run upload_files` separately for the cover image and mp3 file
      1. upload images to IPFS [API doc](https://docs.nftport.xyz/docs/nftport/b3A6MjE0MDYzNzY-upload-a-file-to-ipfs)
      2. Get metadata of the file
   2. `npm run upload_metadata`: Upload metadata to IPFS [API doc](https://docs.nftport.xyz/docs/nftport/b3A6MjE0MDYzNzc-upload-metadata-to-ipfs)
   3. `npm run mint` [API doc](https://docs.nftport.xyz/docs/nftport/b3A6MjE2NjM5MDI-customizable-minting)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
