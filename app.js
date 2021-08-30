const express=require('express')();
const http=require('http').Server(express);
const io=require('socket.io')(http);

var curdate=new Date();
var time=curdate.getDate()+'/'+
(curdate.getMonth()+1)+'/'+
curdate.getFullYear()+'  @'+
curdate.getHours()+":"+
curdate.getMinutes();
//console.log(time);

io.on('connection',(socket)=>{
    socket.on('send message',(msg)=>{
        io.emit('rcv message',time+"  "+msg)
        
    })
})
express.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

http.listen(3000,()=>{
    console.log("started");
})