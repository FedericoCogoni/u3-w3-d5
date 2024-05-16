import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstSection: [],
  secondSection: [],
  thirdSection: [],
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setFirstSection: (state, action) => {
      state.firstSection = action.payload;
    },
    setSecondSection: (state, action) => {
      state.secondSection = action.payload;
    },
    setThirdSection: (state, action) => {
      state.thirdSection = action.payload;
    },
  },
});
export const { setFirstSection, setSecondSection, setThirdSection } = sectionSlice.actions;
export default sectionSlice.reducer;
