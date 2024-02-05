import {
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { ILobbyProps } from './src/pages/room/interfaces';

export type AppStackParamList = {
    Home: IHomePageProps;
    Room: ILobbyProps;
};
  
export type AppStackRoutesType = NativeStackScreenProps<
    AppStackParamList,
    Home,
    Room,
>;