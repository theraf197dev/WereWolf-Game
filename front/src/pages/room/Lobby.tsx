import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";

import { ContainerStyles } from "./Lobby.styles";
import { ILobbyPageProps } from "../../spa/container/lobby/interfaces";
import { IServerInputData } from "../../../../typings";
import { isCreator } from "./helpers";

const Lobby = ({
  navigation,
  lobbyData,
  socket,
  updateLobbyData,
}: ILobbyPageProps) => {
  useEffect(() => {
    socket.on("userLandOnLobby", (data: IServerInputData) => {
      updateLobbyData({ lobbyData: data.lobby });
    });
  }, []);

  useEffect(() => {
    console.log(lobbyData);
  }, [lobbyData]);

  return (
    <ContainerStyles>
      <Text>Lobby ID: {lobbyData.lobbyCode}</Text>
      <View>
        {lobbyData.users?.map((user)=> <Button key={user.userCode} title={user.userName}></Button>)}
      </View>
      {isCreator(lobbyData.creator, socket.id) && <Button title="Start Game"></Button>}
    </ContainerStyles>
  );
};

export default Lobby;
