import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILobby, IUser } from '../../../../../typings';

interface IHomeProps {
    lobbies: ILobby[]
};

const initialState = { lobbies: [] } as IHomeProps;

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        addLobby: (homeReducer, action: PayloadAction<any>) => {
            console.log(action);
            homeReducer.lobbies.push(action.payload);
        },
        joinLobby: (homeReducer, action: PayloadAction<any>) => {
            
        }
    }
});

export const { addLobby, joinLobby } = homeSlice.actions;
export default homeSlice.reducer;