import React, { useState } from 'react';
import {Button, Text, TextInput} from 'react-native';
import { AppStackRoutesType } from '../../../type';

import {
  ButtonWrapperStyles,
  ContainerStyles,
} from './Home.styles';

type Props = {
  route: any,
  navigation: any,
}

const Home = ({
  navigation,
  route,
  increment,
}: any) => {

  return (
    <ContainerStyles>
      <Text>Welcome to the Werewolf Game</Text>
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
        <Button title='Join Game'
          // onPress={() => {
          //     route.params.socket.emit("clientJoinRoom", {userName, roomCode});
          //     route.params.socket.on("serverJoinRoom", (data:any) => {
          //       console.log(data);
          //       setRoom(data.room);
          //     });
          //   }
          // }
        />
      </ButtonWrapperStyles>
    </ContainerStyles>
  );
};

export default Home;
