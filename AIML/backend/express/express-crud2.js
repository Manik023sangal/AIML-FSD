import express from 'express';
import fs from 'fs/promises';
const app = express();
const port = 3000;

const users = {}

app.get("/", (req, res) => {
    res.send("Welcome to My API");
});

app.get("/getusers", (req, res) => {
    res.send(users);
});

app.get("/api", (req, res) => {
    const data = fs.readFile("./users.json","utf-8");
    const users = JSON.parse(data);
    res.send(users);
});

app.use(express.json())//built in middleware

app.get("/api/users", (req, res) => {
    const bodyData = req.body;
    console.log(bodyData);
    res.send("Data received Successfully");
});

app.post("/api/createuser", (req, res) => {
    const {name, email}  = req.body;
    const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users["id"] = newid
    users["name"] = email;
    fs.writeFile("users.json", JSON.stringify(users));
    res.status(201).send("User Created Successfully");
});

app.get("/getusers/:id", (req,res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    res.send(user);
})

app.patch("/api/updateUser/:id", (req,res) => {
    const { id } = req.params;
    const { name } = req.body;
    const index = users.findIndex(user => user.id == id);
    users[index].name = name;
    res.send("User is updated successfully");
})

app.delete("/api/deleteUser/:id", (req,res) => {
    const { id } = req.params;
    const { name } = req.body;
    const index = users.findIndex(user => user.id == id);
    users.splice(index, 1);
    res.send("User is updated successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})