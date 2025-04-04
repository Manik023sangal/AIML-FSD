const express = require('express');
const app = express();
const port = 3000;

//user midd
const adi = (req, res, next) => {
    const age = req.query.age
    if(!age){
        res.send("please enter age")
    }
    if(age <= 18){
        res.send("sorry your age is under 18")
    }
    next();
}

app.use(adi)//application middleware



app.get("/", (req, res) => {
    res.send("This is my home page")
})

//route middleware
app.get("/about", (req, res) => {
    res.send("This is my about page");
})

app.listen(port, () => {
    console.log(`app is running at port: ${port}`);
})
