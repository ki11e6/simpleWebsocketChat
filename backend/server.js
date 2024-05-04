import express from 'express';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

//workoround for __dirname to work.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3500;
//__dirname won't work with es6 module
app.use(express.static(path.join(__dirname, 'public')));

const expressServer = app.listen(PORT, () =>
  console.log(`listening on ${PORT}`)
);
//orgin should be port in which client runs
const io = new Server(expressServer, {
  cors: {
    origin:
      process.env.NODE_ENV === 'production'
        ? false
        : ['http://localhost:5500', 'http://127.0.0.1:5500'],
  },
});

io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected`);

  socket.on('message', (data) => {
    console.log(data);
    io.emit('message', `${socket.id.substring(0, 5)}: ${data}`);
  });
});
