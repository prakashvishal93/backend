const http = require('http');
const { hostname } = require('os');

const localhost = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    res.end("hello from iceTea");

    }else if (req.url ==='/ice-tea') {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    res.end("Thanks You for Ordering Ice Tea");
    }
    else{
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain')
    res.end("404 Page Not Found");
    }

})

server.listen(PORT, hostname,()=>{
    console.log(`Server is listening at ${localhost}:${PORT}`);
    
})