const http = require('http');  //1
const axios = require('axios');
const server = http.createServer(async (req,res) => {  
   res.writeHead(200,{"content-type": "html"}); 
   
   const pdata = await axios.get("https://api.github.com/search/users", {
    params:{
        q:"location:ghaziabad"
    }
   });
   const newdata = pdata.data.items;

   let frontdata = `<html><head></head><body>`
    newdata.forEach((product) => {
        frontdata += `<div><img src = "${product.avatar_url}"></div>`
    });
    frontdata += `</body></html>`;
//    const data = response.data;
//    res.end(JSON.stringify(data));
    res.end(frontdata);
});

const port = 3001; 
server.listen(port, () => {
    console.log(`server is listening on ${port}`); 
})