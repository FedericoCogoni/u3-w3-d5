import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerSong: null,
};

const playerSongSlice = createSlice({
  name: "playerSong",
  initialState,
  reducers: {
    playSong: (state, action) => {
      state.playerSong = action.payload;
    },
  },
});

export const { playSong } = playerSongSlice.actions;
export default playerSongSlice.reducer;
