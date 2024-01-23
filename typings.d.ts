export interface IUser {
    userName: string;
    userCode: string;
    socketId: string;
}

export interface IRoom {
    creator: IUser;
    roomCode: string;
    users: IUser[];
}

export interface ServerToClientEvents {
    serverJoinRoom: (data: {user:IUser, room:IRoom}) => void;
}

export interface ClientToServerEvents {
    clientCreateRoom: (data: {userName:string}) => void;
    clientJoinRoom: (data: {userName:string, roomCode:string}) => void;
}