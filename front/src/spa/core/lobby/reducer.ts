import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ClientToServerEvents, ILobby, ServerToClientEvents } from '../../../../../typings';
import { Socket } from 'socket.io-client';

interface ILobbyProps {
    lobbyData: ILobby,
    socket: Socket<ServerToClientEvents, ClientToServerEvents>,
};

const initialState = { lobbyData: {} } as ILobbyProps;

export const lobbySlice = createSlice({
    name: 'lobby',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<any>) => {
            const {lobbyData, socket} = action.payload;
            state.lobbyData = lobbyData;
            state.socket = socket;
        },
        updateLobbyData: (state, action: PayloadAction<any>) => {
            const { lobbyData } = action.payload;

            state.lobbyData = lobbyData;
        },
    }
});

export const { init, updateLobbyData } = lobbySlice.actions;
export default lobbySlice.reducer;