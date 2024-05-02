import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: '3000' });

server.on('connection', (socket) => {
  socket.on('message', (message) => {
    //converting message buffer to string
    console.log(Buffer.from(message).toString());
    socket.send(`${message}`);
  });
});
