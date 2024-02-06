import { ILobbyPageProps } from "../interfaces";

export const getLobbyProps = ({
    lobbyData,
    navigation,
    updateLobbyData,
    route,
}: ILobbyPageProps) => ({
    lobbyData,
    navigation,
    updateLobbyData,
    route,
    socket: route.params.socket,
});