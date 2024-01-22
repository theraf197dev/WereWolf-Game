import React, { useState } from 'react';
import {Button, Text, TextInput} from 'react-native';

import {
  ButtonWrapperStyles,
  ContainerStyles,
} from './HomePage.styles';
import {
  IHomePageProps,
  IUser,
  IRoom,
} from './interfaces';

const HomePage = ({
  socket,
}: IHomePageProps) => {
  const [userName, setUserName] = useState<string>('');
  const [roomCode, setRoomCode] = useState<string>('');

  return (
    <ContainerStyles>
      <Text>Welcome to the Werewolf Game</Text>
      <TextInput onChangeText={(text:string) => setUserName(text)}/>
      <TextInput onChangeText={(text:string) => setRoomCode(text)}/>
      <ButtonWrapperStyles>
        <Button title='Create Game' onPress={() => {
            socket.emit("clientCreateRoom", {userName});
            socket.on("serverJoinRoom", (data) => {
              console.log(data);
            });
          }
        }/>
        <Button title='Join Game' onPress={() => {
            socket.emit("clientJoinRoom", {userName, roomCode});
            socket.on("serverJoinRoom", (data) => {
              console.log(data);
            });
          }
        }/>
      </ButtonWrapperStyles>
    </ContainerStyles>
  );
};

export default HomePage;
