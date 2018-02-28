const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.Server(app);
const io = socketio(server);

const socketController = require('./util/socketController')
const userController = require('./user/userController');

// export socketio for use in socket conroller
module.exports = io;

const mongoose = require('mongoose');
const mongoURI = 'mongodb://team:CSUnicornBlood@ds229878.mlab.com:29878/pictodraw'
mongoose.connect(mongoURI).then(
  // resolve callback
  () => { console.log('Connected to MongoDB')},
  // reject callback
  err => { console.log('Unable to connect to MongoDB')}
);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname , './../index.html'));
});

app.get('/game', function (req, res) {
  res.sendFile(path.join(__dirname , './../game.html'));
});

app.post('/login', userController.verifyUser, socketController.connect, function(req, res) {
  res.redirect('/game');
})

app.post('/signup', userController.createUser, socketController.connect, function(req, res) {
  res.redirect('/game');
})

app.get('/client/styles/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname , './../client/styles/styles.css'));
});

app.get('/build/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname , './../build/bundle.js'));
});


server.listen(8000);
