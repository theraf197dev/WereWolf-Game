import {
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { IRoomProps } from './src/pages/room/interfaces';

export type AppStackParamList = {
    Home: IHomePageProps;
    Room: IRoomProps;
};
  
export type AppStackRoutesType = NativeStackScreenProps<
    AppStackParamList,
    Home,
    Room,
>;