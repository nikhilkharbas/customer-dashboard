const express = require('express')  
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('short'))

app.get("/",(req, res)=>{
    console.log("Hello From root")
    res.send("Hello From root")
})

app.post("/login",(req,res)=>{
    
    if(req.body.username == "admin" && req.body.password == "admin"){
        res.send("Success")
    }
    res.end()
})

app.listen(3003,()=>{
    console.log("Server is up")
})