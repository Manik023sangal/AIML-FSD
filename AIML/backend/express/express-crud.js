import express from 'express';
const users = [{
    id: 1,
    name: 'Dev',
    email: 'dev@abes.ac.in'
}]

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to My API");
});

app.get("/getusers", (req, res) => {
    res.send(users);
});

app.get("/api", (req, res) => {
    res.send("Welcome to my new API");
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
    users.push({ id : newid, name, email });
    res.status(201).send("User Created Successfully");
});

app.get("/getusers/:id", (req,res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})