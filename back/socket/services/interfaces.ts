import { Server, Socket } from "socket.io";
import {
  ClientToServerEvents,
  ILobby,
  ServerToClientEvents,
} from "../../../typings";

interface IClientCreateLobby {
  io: Server<ClientToServerEvents, ServerToClientEvents>;
  socket: Socket<ClientToServerEvents, ServerToClientEvents>;
  userName: string;
}

interface IClientJoinLobby {
  io: Server<ClientToServerEvents, ServerToClientEvents>;
  lobby: ILobby;
  socket: Socket<ClientToServerEvents, ServerToClientEvents>;
  userName: string;
}

export { IClientCreateLobby, IClientJoinLobby };
