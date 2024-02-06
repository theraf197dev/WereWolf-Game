import { Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ILobby,
  ServerToClientEvents,
} from "../../../../../typings";

export interface ILobbyPageProps {
  init(payload: { lobbyData: ILobby }): void;
  lobbyData: ILobby;
  navigation: any;
  route: any;
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
  updateLobbyData(payload: { lobbyData: ILobby }): void;
}
