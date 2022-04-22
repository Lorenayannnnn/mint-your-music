const basePath = process.cwd();
console.log(basePath);
// TODO haha
const { startCreating, buildSetup } = require(`${basePath}/backend/src/main.js`);

(() => {
  buildSetup();
  startCreating();
})();
