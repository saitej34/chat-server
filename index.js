const express = require('express');
const app =express(); 
const dotenv = require('dotenv');              // intitliazing express app which will be our main app

dotenv.config({path:'./config.env'})

const port = process.env.PORT || 4000

const http = require('http')
const server = http.createServer(app);   //creating our httpserver to proceed with socket

const io = require('socket.io')(server,{
    cors: {
        origin:"*"          // cors => cross origin resource sharing 
    }   
})



io.on('connection',(socket)=>{
    console.log("socket is " + socket)
    console.log("Socket is active");

    socket.on("chat",(payload)=>{
        console.log("payload is ",payload);
        io.emit("chat",payload);
    })
})

server.listen(port,()=>{
    console.log("server listening on port " + port)
})


