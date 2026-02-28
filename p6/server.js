const http = require('http');
const fs = require('fs');
const path = require('path');

const mime = {
    ".html":"text/html",
    ".css":"text/css",
    ".js":"text/javascript",
    ".png":"image/png",
    ".jpg":"image/jpeg",
    ".svg":"image/svg+xml"
};
const server = http.createServer((req,res)=>{

    res.setHeader("X-Content-Type-Options","nosniff");
    res.setHeader("X-Frame-Options","DENY");

    let url = req.url.split("?")[0];
    const routes = {
        "/":"index.html"
    };
    let file = routes[url] || url;
    file = path.normalize(file).replace(/^(\.\.[\/\\])+/, "");
    const filePath = path.join(__dirname,"public",file);
    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.writeHead(404);
            return res.end("Not found");
        }
        const ext = path.extname(filePath);
        res.writeHead(200,{"Content-Type": mime[ext] || "text/plain"});
        res.end(data);
    }   );
});

server.listen(5500,()=>{
    console.log("Servidor → http://localhost:5500");
    console.log("Presiona Ctrl+C para desativar o servidor");
});