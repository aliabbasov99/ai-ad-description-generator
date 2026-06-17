import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aiDesc: "",
  cta: "",
  hashtags: [],
  success: false
};

export const adSlice = createSlice({
  name: 'ad',
  initialState,
  reducers: {
    setAdData: (state, action) => {
      state.aiDesc = action.payload.aiDesc;
      state.cta = action.payload.cta;
      state.hashtags = action.payload.hashtags;
      state.success = action.payload.success
    },
    clearAdData: (state) => {
      state.aiDesc = "";
      state.cta = "";
      state.hashtags = [];
      state.success = false;
    }
  }
});

export const { setAdData, clearAdData } = adSlice.actions;
export default adSlice.reducer;