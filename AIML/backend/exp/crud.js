const express = require('express');
const app = express();

const database = [{id:1, name:"aditya", age:11},
    {id:2, name:"rupak", age:12}
]
app.use(express.json())

//create(C)
app.post('/users', (req, res) => {
    const newUser = {
        id : database.length + 1,
        name : req.body.name,
        age : req.body.age
    };
    database.push(newUser);
    res.status(201).json(newUser);
})

//read(R) - read all
app.get("/user", (req, res) => {
    res.json(database);
})

app.get("/users/:id", (req, res) => {
    const userid = parseInt(req.params.id)
    const userf = database.find(u => u.id === userid)
    if(userf){
        res.json(userf);
    }
    else{
        res.status(404).json({message:"user not found"})
    }
})

//update(U)
app.put('/users/:id', (req, res) => {
    const userid = parseInt(req.params.id)
    const userindex = database.findIndex(u => u.id === userid)
    if(userindex != -1){
        database[userindex] = {...database[userindex], ...req.body};
        res.json(database[userindex]);
    }
    else{
        res.status(404).json({message:"user not found"})
    }
})

//delete(D)
app.delete('/users/:id', (req, res) => {
    const userid = parseInt(req.params.id);
    const userindex = database.findIndex(u => u.id === userid);
    if(userindex !== -1){
        const deleteuser = database.splice(userindex, 1);
        res.json(deleteuser);
    }
    else{
        res.status(404).json({message:"user not found"})
    }
})


const port = 3000;
app.listen(port, () => {
    console.log(`app is running at port: ${port}`)
})