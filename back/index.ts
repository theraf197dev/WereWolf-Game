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
        axios.post('http://localhost:4000/api/user', {
            userName,
            socketId: socket.id,
        }).then(res => {
            console.log(res.data)
            axios.post('http://localhost:4000/api/room', {
                creator: res.data.userCode,
            }).then(roomRes => {
                socket.join(roomRes.data.roomCode);
                io.to(roomRes.data.roomCode).emit("serverJoinRoom", {user: res.data, room: roomRes.data});
            }).catch(e => {
                console.error(e.code)
            })
        }).catch(e => {
            console.error(e.code)
        })
    });

    socket.on("clientJoinRoom", ({ userName, roomCode }) => {
        const user = {
            userName: userName,
            userCode: '1',
            socketId: socket.id,
        };

        const room = {
            creator: user,
            roomCode,
            users: [user],
        };

        socket.join(roomCode);
        io.to(room.roomCode).emit("serverJoinRoom", {user, room});
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

