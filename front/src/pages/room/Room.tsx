import React, { useState } from 'react';
import {Button, Text, TextInput} from 'react-native';

import {
  ButtonWrapperStyles,
  ContainerStyles,
} from './Room.styles';
import {
  IRoomProps,
} from './interfaces';

type Props = {
  route: any,
  navigation: any,
}

const Room = ({
  navigation
}: Props) => {

  return (
    <ContainerStyles>
      <Button title='ASFASF' onPress={() => navigation.navigate('Home')} />
      {/* {users.map(user => <ButtonWrapperStyles key={user.userCode} title={user.userName} />)} */}
    </ContainerStyles>
  );
};

export default Room;
