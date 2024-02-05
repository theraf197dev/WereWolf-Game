import React, { useEffect, useState } from 'react';
import {Button, Text, TextInput} from 'react-native';

import {
  ButtonWrapperStyles,
  ContainerStyles,
} from './Home.styles';
import { IHomePageProps } from '../../spa/container/home/interfaces';
import { Socket, io } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from '../../../../typings';
import { DEV_SERVER } from '../../../CONSTANTS';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(DEV_SERVER);

const Home = ({
  addLobby,
  joinLobby,
  lobbies,
  navigation,
  route,
}: IHomePageProps) => {
  console.log(lobbies)

  useEffect(() => {
    socket.on("userCreateLobby", (data: any) => {
      console.log(data);
      addLobby(data.lobby);
    });

    socket.on("userJoinLobby", (data: any) => {
      console.log('user join lobby');
      // navigation.navidate('lobby');
    });
  }, [lobbies])
  

  return (
    <ContainerStyles>
      <Text>Welcome to the Werewolf Game</Text>
      <ButtonWrapperStyles>
        <Button title='Create Game' onPress={() => socket.emit("clientCreateLobby", {userName: 'asfsafasfg'})} />
        <Button title='Join Game' onPress={() => joinLobby('asfsa', '1')} />
      </ButtonWrapperStyles>
    </ContainerStyles>
  );
};

export default Home;
