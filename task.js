const http = require("http");

const server = http.createServer((req,res)=>{
  if(req.url=="/fake" && req.method=="GET"){
    fetch("https://fakestoreapi.com/products").then((val)=>{
      return val.json();
    }).then((val)=>{
      res.write(JSON.stringify(val))
      res.end();
    })
  }
  else if(req.url=="/dummy" && req.method=="POST"){
    fetch("https://dummyjson.com/users").then((val)=>{
      return val.json();
    }).then((val)=>{
      res.write(JSON.stringify(val))
      res.end();
    })
  }
  else{
    res.write("Not Found");
    res.end();
  }
})

 
const port = 3000;
server.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
