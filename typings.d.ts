export interface IUser {
    userName: string;
    userCode: string;
    socketId: string;
}

export interface ILobby {
    creator: IUser;
    lobbyCode: string;
    users: IUser[];
}

export interface ServerToClientEvents {
    userJoinLobby: (data: {lobby:ILobby}) => void;
    userCreateLobby: (data: {lobby:ILobby}) => void;
    userLandOnLobby: (data: {lobby:ILobby}) => void;
}

export interface ClientToServerEvents {
    clientCreateLobby: (data: {userName:string}) => void;
    clientJoinLobby: (data: {userName:string, lobby:ILobby}) => void;
}