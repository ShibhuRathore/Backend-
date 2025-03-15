const express=require("express")
const app=express();

//? character become optional
//+ character can be repeated anytime
//* any character can come anytime 
app.use("/abou*t",(req,res)=>{
    res.send({"Name" :"Rohit","age":"20"})
})
app.use("/deta?il",(req,res)=>{
    res.send("this is your detail page")
})

app.use("/conta+ct",(req,res)=>{
    res.send("this is your contact page")
})
app.listen(4000,()=>{
    console.log("Listening at port 4000")
})
app.use((req,res)=>{
    res.send("Hello Coder Army")
})