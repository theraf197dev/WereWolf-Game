import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILobby } from "../../../../../typings";
import { IAddLobbyPayloadAction, IFindLobbyPayloadAction } from "../interfaces";

interface IHomeProps {
  error: boolean;
  lobbies: ILobby[];
  selectedLobby: ILobby | null;
}

const initialState = {
  error: false,
  lobbies: [],
  selectedLobby: null,
} as IHomeProps;

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addLobby: (state, action: PayloadAction<IAddLobbyPayloadAction>) => {
      const { lobby } = action.payload;
      state.lobbies.push(lobby);
    },
    findLobby: (state, action: PayloadAction<IFindLobbyPayloadAction>) => {
      const { lobbyCode } = action.payload;

      const lobby = state.lobbies.find(
        (lobby) => lobby.lobbyCode === lobbyCode
      );

      if (lobby) {
        state.selectedLobby = lobby;
        state.error = false;
      } else {
        state.selectedLobby = null;
        state.error = true;
      }
    },
  },
});

export const { addLobby, findLobby } = homeSlice.actions;
export default homeSlice.reducer;
