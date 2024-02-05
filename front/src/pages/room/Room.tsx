import React, { useState } from 'react';
import {Button, Text, TextInput} from 'react-native';

import {
  ButtonWrapperStyles,
  ContainerStyles,
} from './Room.styles';


const Room = ({
  navigation
}: any) => {

  return (
    <ContainerStyles>
      <Button title='ASFASF' onPress={() => navigation.navigate('Home')} />
      {/* {users.map(user => <ButtonWrapperStyles key={user.userCode} title={user.userName} />)} */}
    </ContainerStyles>
  );
};

export default Room;
