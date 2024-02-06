export interface IUser {
  userName: string;
  userCode: string;
}

export interface ILobby {
  creator: IUser;
  lobbyCode: string;
  users: IUser[];
}

export interface ServerInputData {
  lobby: ILobby;
}

export interface ClientInputData {
  lobby: ILobby;
  userName: string;
}

export interface ServerToClientEvents {
  userJoinLobby: (data: ServerInputData) => void;
  userCreateLobby: (data: ServerInputData) => void;
  userLandOnLobby: (data: ServerInputData) => void;
}

export interface ClientToServerEvents {
  clientCreateLobby: (data: ClientInputData) => void;
  clientJoinLobby: (data: ClientInputData) => void;
}
