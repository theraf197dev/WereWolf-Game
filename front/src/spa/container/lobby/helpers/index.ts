import { ILobbyPageProps } from "../interfaces";

export const getLobbyProps = ({
    lobbyData,
    navigation,
    updateLobbyData,
    route,
    socket,
}: ILobbyPageProps) => ({
    lobbyData,
    navigation,
    updateLobbyData,
    route,
    socket: socket || route.params.socket,
});