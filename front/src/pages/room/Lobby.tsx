import React, { useState } from 'react';
import {Button, Text, TextInput} from 'react-native';

import {
  ButtonWrapperStyles,
  ContainerStyles,
} from './Lobby.styles';


const Lobby = ({
  navigation
}: any) => {

  return (
    <ContainerStyles>
      <Button title='ASFASF' onPress={() => navigation.navigate('Home')} />
      {/* {users.map(user => <ButtonWrapperStyles key={user.userCode} title={user.userName} />)} */}
    </ContainerStyles>
  );
};

export default Lobby;
