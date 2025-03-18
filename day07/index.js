const express=require("express")
const app=express();


const BookStore=[
    {id:1,name:"Harry Potter",author:"JK Rowling"},
    {id:2,name:'Friends',author:"siblbersacthz"},
    {id:3,name:"Nexus",author:"rohit"},
    {id:4,name:"DSA",author:"adamahave"},
    {id:5, name:"prem Kahani",author:"chetan bhagat"},
    {id:6,name:"Hello",author:"random_guy"}
]
app.use(express.json())
app.get("/book",(req,res)=>{
    console.log(BookStore);
    res.send(BookStore);
})
app.get("/book/query",(req,res)=>{
    console.log(req.query);
    const Book=BookStore.filter(info=>info.author===req.query.author);
    res.send(Book);
})
app.get("/book/:id",(req,res)=>{
   const id=parseInt(req.params.id);
   const Book=BookStore.find(info=>info.id===id);
     res.send(Book)
})
app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("data saved successfully")
    console.log(req.body);
})
app.patch("/book",(req,res)=>{
    console.log(req.body);
    const Book=BookStore.find(info=>info.id===req.body.id);
    if(req.body.author)
        Book.author=req.body.author;
    if(req.body.name)
        Book.name=req.body.name;
    
    res.send("Patch updated")
})
app.put("/book",(req,res)=>{
    const Book=BookStore.find(info=>info.id===req.body.id);
    Book.author=req.body.author;
    Book.name=req.body.name;
    res.send("Chanfes Updated Successfully")
})
app.delete("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index=BookStore.findIndex(info=>info.id===id);
    console.log(index);
    BookStore.splice(index,1);
    res.send("Successfullt Deleted")
})


app.listen(3001,(req,res)=>{
    console.log("Listening at port 3001")
})

