//const express = require('express');
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Express")
});

//app.use(express.json());

// app.post('/users', (req, res) => {
       //const data = req.body;
       //res.send(`My name is ${data.name}`)
//     res.send("Welcome to Express")
// });

app.get('/api/:name/:rollno', (req, res) => {
    try {
        const {name, rollno} = req.params;
        res.send(`Welcome ${name} and Your roll no. is ${rollno}`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
})

// http://localhost:3000/api?name=Rajesh&rollno=123
const port = 3000;
app.get('/api', (req, res) => {
    // const data = req.query;
    // const {name = "Guest", rollno = 1000} = req.query;
    // console.log(data)
    try {
        const {name, rollno} = req.query;
        if(!name){
            return res.status(400).send("Name is required");
        }
        else{
            res.send(`Welcome to ABES: ${name} and Roll no.: ${rollno}`)
        }
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
    // res.send(`Welcome to ABES: ${name} and Roll no.: ${rollno}`)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});                                                             

//CRUD operations 
//GET = retrieve list of users
//POST = create new user
//PUT = user update
//PATCH = minor changes
//DELETE = delete user