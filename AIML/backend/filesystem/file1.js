const fs = require('fs');
// const fs = require('node:fs');
const data = fs.readFileSync("./data.txt", "utf-8");//encoding scheme like encoding:"utf-8"
console.log(data); //for ascii
// console.log(data.toString());
