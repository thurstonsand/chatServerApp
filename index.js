var app = require('express')();
var io = require('socket.io')(app);

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(3000, function() {
  console.log('listening on *:3000');
});

io.on('connection', function(socket) {
  console.log('a user connected');
});

function configureExpress() {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(logger('dev'));
  app.use(require('stylus').middleware(path.join(__dirname, 'public')));
}