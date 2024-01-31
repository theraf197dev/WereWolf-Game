import { Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents, IRoom } from "../../../../../typings";

export interface IHomePageProps {
    socket: Socket<ServerToClientEvents, ClientToServerEvents>;
    rooms: IRoom[],

};
