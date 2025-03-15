//libuv

const fs=require('fs');

let a =8;
let b=9;
 function sum (a,b){
    console.log(a+b)
}
fs.readFile("./data.json","utf-8",(err,res)=>{
    console.log(res);
})
console.log("hello")
sum(7,3)