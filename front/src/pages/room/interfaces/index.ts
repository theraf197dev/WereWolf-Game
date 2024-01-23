import { Socket } from 'socket.io-client';
import { IRoom, ServerToClientEvents, ClientToServerEvents, IUser } from "../../../../../typings"

export interface IRoomProps {
    roomData: IRoom|null;
    socket: Socket<ServerToClientEvents, ClientToServerEvents>;
    users: IUser[];
}
