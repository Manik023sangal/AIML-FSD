const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello, World!</h1>");
    const data = await fs.readFile("./home.html", "utf-8");
    res.end(data);

    if(req.url === '/'){
            res.writeHead(200, {'Content-type' : 'application/json'});
            const data = await fs.readFile("./users.json", 'utf-8');
            res.end(JSON.stringify(JSON.parse(data)));
    }
    else if(req.url ==='/home'){
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
server.listen(port, () => {
    // const a = server.address();
    console.log(`Server is running on port ${port}`);
});