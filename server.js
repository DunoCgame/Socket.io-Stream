const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
let serverName = process.env.NAME || 'Unknown';
let publicDir = `${__dirname}/public`;


console.log("name-server",serverName);

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
  // res.send('hello world');
		
		res.sendFile(`${publicDir}/cliente.html`)
  
  
});

app.get('/server', function(req,res){
  // res.send('Cliente');
	res.sendFile(`${publicDir}/index.html`)


});



const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

let mess ={
		id:"1",
		user:"Tami",
		message:"hello word"
}
//socket.io
let io = require('socket.io')(server);

io.on('connection',(socket) => {
		
		console.log('socket connection opened:', socket.id);
		
		// io.sockets.emit('Hola', "hola desde server");
		io.sockets.emit('Hola', mess);
		
		socket.on("Hola2",(arg)=>{
			
			console.log(arg);
			
		})	
		
		socket.on("stream",(arg)=>{
			
			console.log(arg);
	
			socket.broadcast.emit('init-stream',arg);
			
			
		})	
		socket.on("stream2",(arg)=>{
			
			// console.log(arg);
	
			socket.broadcast.emit('init-stream2',arg);
			
			
		})

});//cierre connection 

