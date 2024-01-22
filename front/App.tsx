import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TextInputBase, View } from 'react-native';
import { Socket, io } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../typings';
import { useEffect, useState } from 'react';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:3000");


export default function App() {
  const [user, setUser] = useState<string>('');
  useEffect(() => {
    socket.on("serverCreateRoom", (data) => {
      console.log("Entro en la lobby" + data.lobby.id);
    });
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput onChangeText={(text: string) => setUser(text)}/>
      <Button title='Submit' onPress={() => socket.emit("clientCreateRoom", {user})} />
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
