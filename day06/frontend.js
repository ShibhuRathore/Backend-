//Default get method in frontend
const response2=await fetch("https://api.example.com/data")

const response=await fetch('https://api.example.com/data',{
    method:'POST',
    headers:{
        'Content-Type':"application/json"
    },
    body: JSON.stringify({nMW:'JOHN',age:30})
})
const response3=await fetch('https://api.example.com/data',{
    method:'PATCH',
    headers:{
        'Content-Type':"application/json"
    },
    body: JSON.stringify({nMW:'JOHN',age:30})
})