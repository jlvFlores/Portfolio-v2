import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: "AIzaSyAsbelE6ccefDqI4tMagKTbGO6b8T2oNMc",
  authDomain: "portfolio-v2-data.firebaseapp.com",
  projectId: "portfolio-v2-data",
  storageBucket: "portfolio-v2-data.appspot.com",
  messagingSenderId: "580626332128",
  appId: "1:580626332128:web:2c78581703e4884d1a1385",
  measurementId: "G-1YLN38LCXY"
});

const db = getFirestore(app);

export const fetchProjects = createAsyncThunk('portfolio/fetchProjects', async () => {
  try {
    const projectsCol = collection(db, 'projects');
    const projectsSnapshot = await getDocs(projectsCol);
    const projects = projectsSnapshot.docs.map(doc => doc.data());
    return projects;
  } catch (error) {
    throw error;
  }
});

// export const fetchAttributes = createAsyncThunk('portfolio/fetchAttributes', async () => {
//   try {
//     const attributesCol = collection(db, 'attributes');
//     const attributesSnapshot = await getDocs(attributesCol);
//     const attributes = attributesSnapshot.docs.map(doc => doc.data());
//     return attributes;
//   } catch (error) {
//     throw error;
//   }
// });

// export const fetchResume = createAsyncThunk('portfolio/fetchResume', async () => {
//   try {
//     const resumeCol = collection(db, 'resume');
//     const resumeSnapshot = await getDocs(resumeCol);
//     const resume = resumeSnapshot.docs.map(doc => doc.data());
//     return resume;
//   } catch (error) {
//     throw error;
//   }
// });

// export const fetchSectionText = createAsyncThunk('portfolio/fetchSectionText', async () => {
//   try {
//     const sectionTextCol = collection(db, 'projects');
//     const sectionTextSnapshot = await getDocs(sectionTextCol);
//     const sectionText = sectionTextSnapshot.docs.map(doc => doc.data());
//     return sectionText;
//   } catch (error) {
//     throw error;
//   }
// });

const initialState = {
  projects: [],
  isLoading: true,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default portfolioSlice.reducer;
