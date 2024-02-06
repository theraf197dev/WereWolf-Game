import { IUser, ILobby } from "../../../typings";
import { generateLobbyUniqueId } from "../../helpers/helpers";
import { ClientCreateLobby } from "./interfaces";

export const createLobby = ({io, socket, userName}: ClientCreateLobby) => {
    socket.join(userName);

    const user:IUser = {
        userName,
        userCode: socket.id,
        socketId: socket.id,
    }

    const lobby:ILobby = {
        creator: user,
        lobbyCode: generateLobbyUniqueId(),
        users: [user]
    };

    socket.join(lobby.lobbyCode);
    io.to(socket.id).emit("userJoinLobby", {lobby});
    socket.broadcast.emit("userCreateLobby", {lobby});
};
