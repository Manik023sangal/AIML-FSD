const http = require('http');
const fs = require('fs/promises');
// const users = [{
//     id: 1, name: 'Ayush', email: 'ayush@example.com',
// }, {
//     id: 2, name: 'Suresh', email: 'suresh@example.com',
// }, {
//     id: 3, name: 'Rahul', email: 'rahul@example.com',
// }]

const server = http.createServer(async (req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-type', 'text/plain');  // JSON.Parse  //JSON.stringfy
    // res.writeHead(200, {'Content-type' : 'application/json'});
    // const jdata = await fs.readFile("./aa.json", 'utf-8');
    // res.end('Hello, World!');

    // const data = users.map((user) => {
    //     return  user.name;        -> return array
    // })

    // res.end(JSON.stringify(users));
    // const users = JSON.parse(jdata);
    // let data = ""
    // users.forEach((user) => {
    //     data += user.name;
    // })
    // res.end(JSON.stringify(users));
    // res.end(jdata);


    if(req.url === '/'){
        res.writeHead(200, {'Content-type' : 'application/json'});
        const data = await fs.readFile("./aa.json", 'utf-8');
        res.end(JSON.stringify(JSON.parse(data)));
    }
    else if(req.url === '/home'){
        res.writeHead(200, {'Content-type' : 'text/html'});
        const data = await fs.readFile("./home.html", 'utf-8');
        res.end(data);
    }
    else{
        res.writeHead(200, {'Content-type' : 'text/html'});
        const data = await fs.readFile("./error.html", 'utf-8');
        res.end(data);
    }

});

port = 3000;
server.listen(3000, () => {
    console.log(`Server is running on ${port}`);
});