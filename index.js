//answer to the question number 1 ( Server Setup:)
const http=require("http")
const fs = require("fs");

const server = http.createServer((req,res)=>{
//answer to the question number 2 ( Route Handling:)
    if (req.url == '/') {
        res.write("This is the Home Page")
        res.end()
    }
    else if (req.url == '/about') {
        res.write('This is the About Page')
        res.end()
    }
    else if (req.url == '/contact') {
        res.write('This is the Contact Page')
        res.end()
    }
  //answer to the question number 3 ( File Operations:)
    else if (req.url == '/file-write') {
        fs.writeFile('demo.txt', 'Hello World', function (error) {
            if (error) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>File Write Fail</h1>');
                res.end();
              } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>File Write Success</h1>');
                res.end();
              }
        })

    }
    else {
        res.statusCode = 404
        res.write('Page not found')
//answer to the question number 4 (Response Termination::)
        res.end()
    }
})


server.listen(5500,function(){
    console.log("5500 server run success")
})