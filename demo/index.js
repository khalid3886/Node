const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader('Content-type','text/html')
    res.end("<h1>THIS IS HOME PAGE</h1>");
  } else if (req.url === "/about") {
    res.end("this is about page of application");
  } else if (req.url === "/users") {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) res.end(err);
      else res.end(data);
    });
  }
  else if(req.url==='./addusers' && req.method==='POST')
  {
    let str="";
    req.on('data',(chunk)=>{
      str+=chunk;
    })
    req.on('end',()=>{
      console.log(str);
    })
    res.end('data has been added')
  }
  else {
    res.end("404 does not exits!");
  }
});

server.listen(8080, () => {
  //port number
  console.log("Server is runing at port 8080");
});
