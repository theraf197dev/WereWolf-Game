import { IUser } from "../../../typings";
import { ClientJoinLobby } from "./interfaces";

export const joinLobby = ({io, socket, userName, lobby}: ClientJoinLobby) => {
    const user:IUser = {
        userName,
        userCode: socket.id,
        socketId: socket.id,
    };

    lobby.users.push(user);
    
    socket.join(lobby.lobbyCode);
    io.to(socket.id).emit("userJoinLobby", {lobby});
    io.to(lobby.lobbyCode).emit("userLandOnLobby", {lobby});
};