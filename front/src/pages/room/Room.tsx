import React, { useState } from 'react';
import {Button, Text, TextInput} from 'react-native';

import {
  ButtonWrapperStyles,
  ContainerStyles,
} from './Room.styles';
import {
  IRoomProps,
} from './interfaces';

const Room = ({
  socket,
  users = [],
  roomData,
}: IRoomProps) => {

  return (
    <ContainerStyles>
      {users.map(user => <ButtonWrapperStyles key={user.userCode} title={user.userName} />)}
    </ContainerStyles>
  );
};

export default Room;
