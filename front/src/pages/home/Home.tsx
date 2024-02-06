import React, { useEffect, useState } from "react";
import { Button, Text, TextInput } from "react-native";

import { ButtonWrapperStyles, ContainerStyles } from "./Home.styles";
import { IHomePageProps } from "../../spa/container/home/interfaces";

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
  console.log(lobbies);

  useEffect(() => {
    socket.on("userCreateLobby", (data: any) => {
      console.log(data);
      addLobby({ lobby: data.lobby });
    });

    socket.on("userJoinLobby", (data: any) => {
      console.log("user join lobby");
      console.log(data);
      navigation.navigate("Lobby", { lobbyData: data.lobby, socket });
    });
  }, [lobbies]);

  useEffect(() => {
    if (!error && selectedLobby) {
      console.log(selectedLobby);
      socket.emit("clientJoinLobby", {
        userName: "sfsagsag",
        lobby: selectedLobby,
      });
    } else if (error && !selectedLobby) {
      console.error("Lobby not found");
    }
  }, [selectedLobby, error]);

  return (
    <ContainerStyles>
      <Text>Welcome to the Werewolf Game</Text>
      <ButtonWrapperStyles>
        <Button
          title="Create Game"
          onPress={() =>
            socket.emit("clientCreateLobby", { userName: "asfsafasfg" })
          }
        />
        <Button
          title="Join Game"
          onPress={() => findLobby({ lobbyCode: "21451251" })}
        />
      </ButtonWrapperStyles>
    </ContainerStyles>
  );
};

export default Home;
