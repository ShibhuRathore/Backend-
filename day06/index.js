const express=require("express")
const app=express();


const BookStore=[
    {id:1,name:"Harry Potter",author:"JK Rowling"},
    {id:2,name:'Friends',author:"siblbersacthz"},
    {id:3,name:"Nexus",author:"rohit"},
    {id:4,name:"DSA",author:"adamahave"}
]
app.use(express.json())
app.get("/book",(req,res)=>{
    res.send(BookStore)
})
app.get("/book/:id",(req,res)=>{
   const id=parseInt(req.params.id);
   const Book=BookStore.find(info=>info.id===id);
     res.send(Book)
})
app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("data saved successfully")
    console.log(BookStore);
})

 



//parsing karni hoti h 
// app.use(express.json());
//middleware: json format data=> JS Object 
// app.post("/user",(req,res)=>{
//     console.log(req.body);
//     res.send("Hello COder army")
// })
// app.get("/user",(req,res)=>{
//     res.send("Rohit Negi")
// })
app.listen(3000,(req,res)=>{
    console.log("Listening at port 3000")
})
