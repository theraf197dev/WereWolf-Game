import { ILobby } from "../../../../../typings";

export interface ILobbyPageProps {
    lobbyData: ILobby,
    navigation: any,
    updateLobbyData(payload: {lobbyData: ILobby}): void,
    route: any,
};