const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const user = [{
    id:101,
    name:"aditya"
}]

app.get('/', (req, res) => {
    res.send("this is our home page");
})

app.get('/about', (req, res) => {
    // res.send("this is about page");
    //res.json(user)
    res.sendFile(path.join(__dirname,"aboutus.html"))
})

app.get('/home', (req, res) => {
    // res.send("this is about page");
    //res.json(user)
    res.sendFile(path.join(__dirname,"home.html"))
})

app.get('/contact', (req, res) => {
    // res.send("this is about page");
    //res.json(user)
    res.sendFile(path.join(__dirname,"contact.html"))
})

app.listen(port, () => {
    console.log(`app is run at:-${port}`)
})