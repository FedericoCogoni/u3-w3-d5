import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  likedSongs: [],
}

const likedSongsSlice = createSlice({
  name: "likedSongs",
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.likedSongs = [...state.likedSongs, action.payload]
    },
    removeSong: (state, action) => {
      const index = state.likedSongs.findIndex(song => song.id === action.payload)
      if (index !== -1) {
        state.likedSongs.splice(index, 1)
      }
    },
  },
})
export const { addSong, removeSong } = likedSongsSlice.actions
export default likedSongsSlice.reducer
