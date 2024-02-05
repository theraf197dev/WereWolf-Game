import { Socket } from "socket.io-client";
import { ClientToServerEvents, ILobby, IUser, ServerToClientEvents } from "../../../../../typings";

export interface IHomePageProps {
    addLobby(lobby: ILobby): void,
    joinLobby(username:string, lobbyCode: string): void,
    lobbies: ILobby[],
    navigation: any,
    route: any,
    socket: Socket<ServerToClientEvents, ClientToServerEvents>,
};