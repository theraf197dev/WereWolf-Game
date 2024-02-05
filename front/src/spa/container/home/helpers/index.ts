import { IHomePageProps } from "../interfaces";

export const getHomeProps = ({
    addLobby,
    joinLobby,
    lobbies,
    navigation,
    route,
    socket,
}: IHomePageProps) => ({
    addLobby,
    joinLobby,
    lobbies,
    navigation,
    route,
    socket,
});