import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Socket, io } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../typings';
import HomePage from './src/pages/home/HomePage';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:3000");


export default function App() {
  return (
    <View style={styles.container}>
      <HomePage socket={socket}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
