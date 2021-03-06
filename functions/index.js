const fs = require("fs");
const path = require("path");

const apiPath = path.join(__dirname, "apis");

fs.readdirSync(apiPath).filter(f => f.endsWith('.js')).forEach(file => {
  const filePath = path.join(apiPath, file);
  const apiForFile = require(filePath);
  Object.assign(exports, apiForFile);
});
