export interface ServerToClientEvents {
    serverCreateRoom: (data: {user:any, lobby:any}) => void;
}

export interface ClientToServerEvents {
    clientCreateRoom: (data: {user:string}) => void;
}