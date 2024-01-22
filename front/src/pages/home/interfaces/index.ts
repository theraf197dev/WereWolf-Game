import { Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from "../../../../../typings"

export interface IHomePageProps {
    socket: Socket<ServerToClientEvents, ClientToServerEvents>;
};
