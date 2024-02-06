import { IUser } from "../../../typings";
import { IClientJoinLobby } from "./interfaces";

export const joinLobby = ({ io, lobby, socket, userName }: IClientJoinLobby) => {
  const user: IUser = {
    userName,
    userCode: socket.id,
  };

  lobby.users.push(user);

  socket.join(lobby.lobbyCode);
  io.to(socket.id).emit("userJoinLobby", { lobby });
  io.to(lobby.lobbyCode).emit("userLandOnLobby", { lobby });
};
