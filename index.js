var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


// create connection
io.on('connection', function(socket) {
   console.log('A user connected');


  socket.on('message2' , (data) => {
  	// print the data coming from server 1
   	console.log(data);


   });

   });
 

const port = process.env.PORT || 9001;
server.listen(port);