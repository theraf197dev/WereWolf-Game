import express from 'express';
import axios from 'axios';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';

import {
    ClientToServerEvents,
    ILobby,
    IUser,
    ServerToClientEvents,
} from '../typings';

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

io.on("connection", (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
    socket.on("clientCreateLobby", ({ userName }) => {
        socket.join(userName);

        const user:IUser = {
            userName,
            userCode: socket.id,
            socketId: socket.id,
        }

        const lobby:ILobby = {
            creator: user,
            lobbyCode: '21451251',
            users: [user]
        }

        socket.join(lobby.lobbyCode);
        io.to(socket.id).emit("userJoinLobby", {lobby});
        socket.broadcast.emit("userCreateLobby", {lobby});
    });

    socket.on("clientJoinLobby", ({ userName, lobby }) => {
        const user:IUser = {
            userName,
            userCode: socket.id,
            socketId: socket.id,
        };

        lobby.users.push(user);
        
        socket.join(lobby.lobbyCode);
        io.to(socket.id).emit("userJoinLobby", {lobby});
        io.to(lobby.lobbyCode).emit("userLandOnLobby", {lobby});
    })
});

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

