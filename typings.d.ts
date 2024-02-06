export interface IUser {
  userName: string;
  userCode: string;
}

export interface ILobby {
  creator: IUser;
  lobbyCode: string;
  users: IUser[];
}

export interface IServerInputData {
  lobby: ILobby;
}

export interface IClientCreateLobbyInputData {
  userName: string;
}

export interface IClientJoinLobbyInputData {
  lobby: ILobby;
  userName: string;
}

export interface ServerToClientEvents {
  userJoinLobby: (data: IServerInputData) => void;
  userCreateLobby: (data: IServerInputData) => void;
  userLandOnLobby: (data: IServerInputData) => void;
}

export interface ClientToServerEvents {
  clientCreateLobby: (data: IClientCreateLobbyInputData) => void;
  clientJoinLobby: (data: IClientJoinLobbyInputData) => void;
}
