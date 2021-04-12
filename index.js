const express = require('express');
const app = express();
const server = require('http').Server(app);
const options = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
};
const io = require('socket.io')(server, options);
const cors = require('cors');

const api = require("./api");
const socketEvents = require("./socket/index.js");

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

app.use(cors());

app.use(express.static('js'));

app.use(api);

socketEvents(io);
