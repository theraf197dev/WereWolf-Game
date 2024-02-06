import React, { useEffect, useState } from "react";
import { Button, Text, TextInput } from "react-native";

import { ButtonWrapperStyles, ContainerStyles } from "./Home.styles";
import { IHomePageProps } from "../../spa/container/home/interfaces";
import { IServerInputData } from "../../../../typings";

const Home = ({
  addLobby,
  error,
  findLobby,
  lobbies,
  navigation,
  route,
  socket,
  selectedLobby,
}: IHomePageProps) => {
  const [userName, setUsername] = useState('');
  const [lobbyCode, setLobbyCode] = useState('');

  useEffect(() => {
    socket.on("userCreateLobby", (data: IServerInputData) => {
      addLobby({ lobby: data.lobby });
    });
  }, [lobbies]);

  socket.on("userJoinLobby", (data: IServerInputData) => {
    navigation.navigate("Lobby", { lobbyData: data.lobby, socket });
  });

  useEffect(() => {
    if (!error && selectedLobby) {
      socket.emit("clientJoinLobby", {
        userName,
        lobby: selectedLobby,
      });
    } else if (error && !selectedLobby) {
      console.error("Lobby not found");
    }
  }, [selectedLobby, error]);

  return (
    <ContainerStyles>
      <Text>Welcome to the Werewolf Game</Text>
      <TextInput inputMode="text" onChangeText={(text) => setUsername(text)}></TextInput>
      <TextInput inputMode="text" onChangeText={(text) => setLobbyCode(text)}></TextInput>
      <ButtonWrapperStyles>
        <Button
          title="Create Game"
          onPress={() =>
            socket.emit("clientCreateLobby", { userName })
          }
        />
        <Button
          title="Join Game"
          onPress={() => findLobby({ lobbyCode })}
        />
      </ButtonWrapperStyles>
    </ContainerStyles>
  );
};

export default Home;
