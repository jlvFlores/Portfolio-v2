import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: {},
  isLoading: true,
  error: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
