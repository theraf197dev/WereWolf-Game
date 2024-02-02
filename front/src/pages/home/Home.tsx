import React, { useState } from 'react';
import {Button, Text, TextInput} from 'react-native';
import { AppStackRoutesType } from '../../../type';

import {
  ButtonWrapperStyles,
  ContainerStyles,
} from './Home.styles';
import {
  IHomePageProps,
} from './interfaces';
import { IRoom } from '../../../../typings';

type Props = {
  route: any,
  navigation: any,
}

const Home = ({
  navigation,
  route,
  increment,
}: any) => {
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
            // socket.emit("clientCreateRoom", {userName});
            // socket.on("serverJoinRoom", (data) => {
            //   console.log(data);
            //   setRoom(data.room);
            // });
            increment();
          }
        }/>
        <Button title='Join Game' onPress={() => {
            route.params.socket.emit("clientJoinRoom", {userName, roomCode});
            route.params.socket.on("serverJoinRoom", (data:any) => {
              console.log(data);
              setRoom(data.room);
            });
          }
        }/>
      </ButtonWrapperStyles>
    </ContainerStyles>
  );
};

export default Home;
