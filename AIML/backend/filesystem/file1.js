// const fs = require('fs');
// // const fs = require('node:fs');
// // const data = fs.readFileSync("./data.txt", "utf-8");//encoding scheme like encoding:"utf-8"
// // console.log(data); //for ascii
// // console.log(data.toString());

// fs.writeFileSync("./data1.txt", 'Hey This is my new work', 'utf-8');

// const fs = require('fs');
// fs.writeFileSync("./data2.txt", 'Hey This is my new work', 'utf-8');
// fs.appendFileSync("./data1.txt", ' Work form another file', 'utf-8');
// fs.renameSync('./data2.txt', './data3.txt');

// fs.unlinkSync('./data3.txt'); // delete

const fs = require('fs');
const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);

if(data.match("H")){
  const newdata = data.replace("H", "ABES");
  fs.writeFileSync('./data.txt', newdata, 'utf-8');  
}