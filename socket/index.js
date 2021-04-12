function init(io) {
  io.on('connection', socket => {
    console.log('a user connected');
    if (!global._session_) global._session_ = { user: 0 };

    const clientsCount = socket.client.conn.server.clientsCount;
    console.log(`### Clients Count: ${clientsCount}`);

    io.emit('clientsCount', clientsCount);

    socket.on('joinRoom', id => {
      socket.join(id, () => {
        console.log(`joining ${id}`);
        io.to(id).emit('joinRoom', id);
      });
    });

    socket.on('chat message', (id, msg) => {
      console.log(`id: ${id}, msg: ${msg}`);
      io.to(id).emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
}

module.exports = init
