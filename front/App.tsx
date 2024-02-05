import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { AppStackParamList } from './type';

import { Provider } from 'react-redux';
import store from './src/spa/store/store';
import HomePageConnector from './src/spa/container/home/HomePageConnector';

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomePageConnector} options={{headerShown: false}} />
          {/* <Stack.Screen name='Room' component={Room}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
