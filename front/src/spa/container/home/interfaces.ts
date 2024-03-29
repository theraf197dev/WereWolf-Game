import { Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ILobby,
  ServerToClientEvents,
} from "../../../../../typings";

export interface IHomePageProps {
  addLobby(payload: { lobby: ILobby }): void;
  error: boolean;
  findLobby(payload: { lobbyCode: string }): void;
  lobbies: ILobby[];
  navigation: any;
  route: any;
  selectedLobby: ILobby;
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}
