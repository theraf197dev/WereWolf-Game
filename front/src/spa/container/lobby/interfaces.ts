import { Socket } from "socket.io-client";
import { ClientToServerEvents, ILobby, ServerToClientEvents } from "../../../../../typings";

export interface ILobbyPageProps {
    lobbyData: ILobby,
    navigation: any,
    route: any,
    socket: Socket<ServerToClientEvents, ClientToServerEvents>,
};