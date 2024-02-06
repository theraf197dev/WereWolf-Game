import { ILobbyPageProps } from "../interfaces";

export const getLobbyProps = ({
  init,
  lobbyData,
  navigation,
  route,
  updateLobbyData,
}: ILobbyPageProps) => ({
  init,
  lobbyData,
  navigation,
  route,
  socket: route.params.socket,
  updateLobbyData,
});
