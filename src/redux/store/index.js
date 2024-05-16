import { combineReducers } from "redux";
import sectionReducer from "../reducers/sectionReducer";
import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from "../reducers/resultsReducer";
import likedSongsReducer from "../reducers/likedSongsReducer";
import playerSongReducer from "../reducers/playerSongReducer";

const rootReducer = combineReducers({
  section: sectionReducer,
  results: resultsReducer,
  likedSongs: likedSongsReducer,
  playSong: playerSongReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
