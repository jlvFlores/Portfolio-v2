import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postRequest = createAsyncThunk('form/postRequest', async (data) => {
  const response = await axios.post('https://formspree.io/f/mjvdkwqz', data);
  return response.data;
});

const formSlice = createSlice({
  name: 'form',
  initialState: {
    hasBeenSent: false,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postRequest.pending, (state) => ({
        ...state, hasBeenSent: false, isLoading: true,
      }))
      .addCase(postRequest.fulfilled, (state) => ({
        ...state, hasBeenSent: true, isLoading: false,
      }))
      .addCase(postRequest.rejected, (state, action) => ({
        ...state,
        hasBeenSent: false,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default formSlice.reducer;
