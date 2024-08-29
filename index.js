require('dotenv').config()
const express = require('express')
const app = express();


app.get('/api/get',(req,res)=>{
    res.send(`hello friends from`)
})

app.get('/api/env',(req,res)=>{
    res.send(`this name is come from env file - ${process.env.NAME}`)
})

app.get('/api/pm2',(req,res)=>{
    res.send("now pm2 added")
})


app.listen(process.env.PORT, ()=>{
    console.log("server is running..........")
})