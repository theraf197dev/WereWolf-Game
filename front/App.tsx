import { StyleSheet, View } from 'react-native';
import { Socket, io } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../typings';
import { DEV_SERVER } from './CONSTANTS';

import HomePage from './src/pages/home/HomePage';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(DEV_SERVER);

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage socket={socket} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
