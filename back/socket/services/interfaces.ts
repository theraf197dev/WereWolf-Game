import { Server, Socket } from "socket.io";
import {
  ClientToServerEvents,
  ILobby,
  ServerToClientEvents,
} from "../../../typings";

interface ClientCreateLobby {
  io: Server<ClientToServerEvents, ServerToClientEvents>;
  socket: Socket<ClientToServerEvents, ServerToClientEvents>;
  userName: string;
}

interface ClientJoinLobby {
  io: Server<ClientToServerEvents, ServerToClientEvents>;
  socket: Socket<ClientToServerEvents, ServerToClientEvents>;
  userName: string;
  lobby: ILobby;
}

export { ClientCreateLobby, ClientJoinLobby };
