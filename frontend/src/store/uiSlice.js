import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    loading: false,
    infoArea: "Xahiş olunur məlumatları daxil edin...",
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload; 
    },
    setInfoArea: (state, action) => {
      state.infoArea = action.payload;
    }
  }
});

export const { setLoading, setInfoArea } = uiSlice.actions;
export default uiSlice.reducer;