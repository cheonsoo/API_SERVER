const express = require('express');
const app = express();
const options = {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
};
const server = require('http').Server(app, options);
const io = require('socket.io')(server, options);


io.on('connection', socket => {
  console.log('a user connected');
  // console.log(global);
  if (!global._session_) global._session_ = { user: 0 };
  // global._counter.user++;
  // console.log(global._counter.user);
  const clientsCount = socket.client.conn.server.clientsCount;
  console.log(`### Clients Count: ${clientsCount}`);

  io.emit('clientsCount', clientsCount);
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});
