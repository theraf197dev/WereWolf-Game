import { StyleSheet } from 'react-native';
import { Socket, io } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../typings';
import { DEV_SERVER } from './CONSTANTS';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import { AppStackParamList } from './type';

import HomePage from './src/pages/home/HomePage';
import Room from './src/pages/room/Room';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(DEV_SERVER);

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomePage} options={{headerShown: false}} initialParams={{socket, roomData: {}}} />
        <Stack.Screen name='Room' component={Room}/>
      </Stack.Navigator>
    </NavigationContainer>
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
