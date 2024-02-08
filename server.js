const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

if (!fs.existsSync(path.join(__dirname, "css", "style.css"))) {
  fsPromises.mkdir(path.join(__dirname, "css", "style.css"));
}
