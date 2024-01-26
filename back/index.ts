import express from 'express';
import axios from 'axios';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';

import {
    ClientToServerEvents,
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
    socket.on("clientCreateRoom", ({ userName }) => {
        axios.post('http://localhost:4000/api/room', {roomName: 'test'}).then(roomRes => {
            axios.post('http://localhost:4000/api/user', {
                userName,
                creator: true,
                socketId: socket.id,
                roomCode: roomRes.data.roomCode,
            }).then(res => {
                socket.join(roomRes.data.roomCode);
                io.to(roomRes.data.roomCode).emit("serverJoinRoom", {user: res.data, room: roomRes.data});
            }).catch(e => {
                console.error(e.code)
            });
        }).catch(e => {
            console.error(e.code)
        });
    });

    socket.on("clientJoinRoom", ({ userName, roomCode }) => {
        axios.post('http://localhost:4000/api/user', {
            userName,
            creator: false,
            socketId: socket.id,
            roomCode: roomCode,
        }).then(res => {
            socket.join(roomCode);
            io.to(roomCode).emit("serverJoinRoom", {user: res.data, room: roomCode});
        }).catch(e => {
            console.error(e.code)
        });
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

