import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILobby } from '../../../../../typings';

interface ILobbyProps {
    lobbyData: ILobby,
};

const initialState = { lobbyData: {} } as ILobbyProps;

export const lobbySlice = createSlice({
    name: 'lobby',
    initialState,
    reducers: {
        
    }
});

export const {  } = lobbySlice.actions;
export default lobbySlice.reducer;