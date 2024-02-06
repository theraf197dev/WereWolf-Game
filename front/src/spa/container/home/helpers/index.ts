import { IHomePageProps } from "../interfaces";

export const getHomeProps = ({
    addLobby,
    error,
    findLobby,
    lobbies,
    navigation,
    route,
    selectedLobby,
    socket,
}: IHomePageProps) => ({
    addLobby,
    error,
    findLobby,
    lobbies,
    navigation,
    route,
    selectedLobby,
    socket,
});