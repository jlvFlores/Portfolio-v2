import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyAsbelE6ccefDqI4tMagKTbGO6b8T2oNMc',
  authDomain: 'portfolio-v2-data.firebaseapp.com',
  projectId: 'portfolio-v2-data',
  storageBucket: 'portfolio-v2-data.appspot.com',
  messagingSenderId: '580626332128',
  appId: '1:580626332128:web:2c78581703e4884d1a1385',
  measurementId: 'G-1YLN38LCXY',
});

const db = getFirestore(app);

export const fetchCollections = createAsyncThunk('portfolio/fetchCollections', async () => {
  try {
    const collections = [];

    const projectsSnapshot = await getDocs(collection(db, 'projects'));
    const attributesSnapshot = await getDocs(collection(db, 'attributes'));
    const resumeSnapshot = await getDocs(collection(db, 'resume'));
    const sectionTextSnapshot = await getDocs(collection(db, 'sectionText'));

    collections.push({
      attributes: attributesSnapshot.docs.map((doc) => doc.data()),
      projects: projectsSnapshot.docs.map((doc) => doc.data()),
      resume: resumeSnapshot.docs.map((doc) => doc.data())[0],
      sectionText: sectionTextSnapshot.docs.map((doc) => doc.data())[0],
    });

    return collections;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  attributes: [],
  projects: [],
  resume: [],
  sectionText: [],
  isLoading: true,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => ({
        ...state, isLoading: true,
      }))
      .addCase(fetchCollections.fulfilled, (state, action) => {
        const {
          attributes, projects, resume, sectionText,
        } = action.payload[0];
        return ({
          ...state,
          attributes,
          projects,
          resume,
          sectionText,
          isLoading: false,
          error: null,
        });
      })
      .addCase(fetchCollections.rejected, (state, action) => ({
        ...state, isLoading: false, error: action.error.message,
      }));
  },
});

export default portfolioSlice.reducer;
