import React, { useState } from 'react';
import {Button, Text, TextInput} from 'react-native';

import {
  ButtonWrapperStyles,
  ContainerStyles,
} from './HomePage.styles';
import {
  IHomePageProps,
} from './interfaces';
import { IRoom } from '../../../../typings';

const HomePage = ({
  socket,
}: IHomePageProps) => {
  const [userName, setUserName] = useState<string>('');
  const [roomCode, setRoomCode] = useState<string>('');
  const [room, setRoom] = useState<IRoom|null>(null);

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
              setRoom(data.room);
            });
          }
        }/>
        <Button title='Join Game' onPress={() => {
            socket.emit("clientJoinRoom", {userName, roomCode});
            socket.on("serverJoinRoom", (data) => {
              console.log(data);
              setRoom(data.room);
            });
          }
        }/>
      </ButtonWrapperStyles>
    </ContainerStyles>
  );
};

export default HomePage;
