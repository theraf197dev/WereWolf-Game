import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";

import { ClientToServerEvents, ServerToClientEvents } from "../typings";
import { createLobby } from "./socket/services/clientCreateLobby";
import { joinLobby } from "./socket/services/clientJoinLobby";

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
  cors: {
    origin: "http://localhost:8081",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on(
  "connection",
  (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
    socket.on("clientCreateLobby", ({ userName }) => {
      createLobby({ io, socket, userName });
    });

    socket.on("clientJoinLobby", ({ lobby, userName }) => {
      joinLobby({ io, lobby, socket, userName });
    });
  }
);

//Sends to every socket
// io.on("connection", (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
//     socket.on("clientMsg", (data) => {
//         io.sockets.emit("serverMsg", data);
//     })
// });

//Send to every socket but sender
// io.on("connection", (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
//     socket.on("clientMsg", (data) => {
//         socket.broadcast.emit("serverMsg", data);
//     })
// });

//Certain group of sockets
// io.on("connection", (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
//     socket.on("clientMsg", (data) => {
//         if(data.room === '') {
//             io.sockets.emit("serverMsg", data);
//         }
//         else {
//             socket.join(data.room);
//             io.to(data.room).emit("serverMsg", data);
//         }
//     })
// });

server.listen(3000);
