import { ILobbyPageProps } from "../interfaces";

export const getLobbyProps = ({
    lobbyData,
    navigation,
    route,
    socket,
}: ILobbyPageProps) => ({
    lobbyData,
    navigation,
    route,
    socket,
});