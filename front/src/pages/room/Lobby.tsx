import React, { useEffect, useState } from 'react';
import {Button, Text, TextInput} from 'react-native';

import {
  ButtonWrapperStyles,
  ContainerStyles,
} from './Lobby.styles';


const Lobby = ({
  navigation,
  lobbyData,
  socket,
  updateLobbyData,
}: any) => {

  useEffect(() => {
    socket.on("userLandOnLobby", (data: any) => {
      updateLobbyData({lobbyData: data.lobby});
    });
  }, []);

  useEffect(() => {
    console.log(lobbyData)
  }, [lobbyData])
  

  return (
    <ContainerStyles>
      <Button title='ASFASF' onPress={() => navigation.navigate('Home')} />
      {/* {users.map(user => <ButtonWrapperStyles key={user.userCode} title={user.userName} />)} */}
    </ContainerStyles>
  );
};

export default Lobby;
