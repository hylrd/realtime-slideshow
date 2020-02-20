const express = require('express')
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  console.log('masup pak');
});
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))
var cors = require('cors')
app.use(cors())

const images = [
  'https://i.ytimg.com/vi/zB5dlqSds3k/maxresdefault.jpg',
  'https://scstylecaster.files.wordpress.com/2019/10/pretty-in-pink-1.jpg',
  'https://purewows3.imgix.net/images/articles/2017_05/Heathers.jpg?auto=format,compress&cs=strip'
]

io.on('connection', function(socket){
  io.emit('gambar', images)
  console.log('a user connected');
  socket.on('hai', (mand)=>{
    // console.log(msg)
    // io.emit('hai', 'iya masuk')
    if(mand == 'next'){
    io.emit('hai', +1)
    }else{
    io.emit('hai', -1)
    }
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});