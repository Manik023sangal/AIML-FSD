const http = require('http');
const axios = require('axios');
const port = 3000;
const server = http.createServer(async (req, res) => {
    console.log('Hello from the server!');
    res.writeHead(200, {"content-type":"html"});
    // const response = await fetch("https://dummyjson.com/products"); //promise
    // const data = await response.json();
   
    const response = await axios.get("https://dummyjson.com/products");     // API - response object - .json, .text
    const productsdata = response.data.products;                                    //string - object - JSON.parse()  object - string - JSON.stringify          
    let frontdata = `<html><head></head></html>`
    productsdata.forEach((product) => {
        frontdata += `<div><img src = "${product.thumbnail}"></div>`
    });
    frontdata += `<body></html>`;
    // res.end(JSON.stringify(productsdata));
    res.end(frontdata);
    // res.end(JSON.stringify(data));
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});