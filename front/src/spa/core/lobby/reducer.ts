import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILobby } from "../../../../../typings";

interface ILobbyProps {
  lobbyData: ILobby;
}

const initialState = { lobbyData: {} } as ILobbyProps;

export const lobbySlice = createSlice({
  name: "lobby",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<any>) => {
      const { lobbyData } = action.payload;
      state.lobbyData = lobbyData;
    },
    updateLobbyData: (state, action: PayloadAction<any>) => {
      const { lobbyData } = action.payload;

      state.lobbyData = lobbyData;
    },
  },
});

export const { init, updateLobbyData } = lobbySlice.actions;
export default lobbySlice.reducer;
