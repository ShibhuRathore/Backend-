const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Hello Coder Army")
    }

    else if(req.url==="/contact"){
        res.end("hello coder army")
    }
    else if(req.url==="/about"){
        res.end("This is our about page")
    }
});

server.listen(4000,()=>{
    console.log("I am listening at port number 4000")
});