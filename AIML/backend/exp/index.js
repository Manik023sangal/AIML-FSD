const express = require('express');
const adi = require("./data");
const ab = require("./abes");
const path = require('path');
const app = express();
const port = 3000;

// const student = [{
//     id:101,
//     name:"aditya"
// }, {
//      id:102,
//      name:"manas"
// }, {
//      id:103,
//      name:"naman"
// }, {
//      id:104,
//      name:"manav"
// }, {
//      id:105,
//      name:"aryan"
// }]

// app.get('/', (req, res) => {
//      res.send("this is our home page");
// })

// app.get('/about', (req, res) => {
// //     res.json(ab);
//     res.sendFile(path.join(__dirname,"aboutus.html"));
// })

// app.get('/home', (req, res) => {
// //     res.send("this is about home page");
//     res.sendFile(path.join(__dirname,"home.html"));
// })

// app.get('/contact', (req, res) => {
// //      //res.send("this is about contact page");
//     res.sendFile(path.join(__dirname,"contact.html"));
// })

app.use(express.json())
app.post('/api/abes', (req, res) => {
     console.log("body", req.body);
     res.json({})
})

app.listen(port, () => {
     console.log(`app is run at:-${port}`);
})