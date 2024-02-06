import { ILobby } from "../../../../typings";

export interface ILobbyPayloadAction {
  lobbyData: ILobby;
}

export interface IAddLobbyPayloadAction {
  lobby: ILobby;
}

export interface IFindLobbyPayloadAction {
  lobbyCode: string;
}
