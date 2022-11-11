const path = require("path")

let outputPath = path.join(__dirname, "node" ,"node.js")
console.log(outputPath);
console.log(path.extname(outputPath));
console.log(path.parse(outputPath));