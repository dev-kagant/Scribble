import { createSlice } from '@reduxjs/toolkit'
import { sharedInitialState } from './index';

const initialState = sharedInitialState.siteTitle;

console.log('Initial State', initialState);

const titleSlice = createSlice({
  name: title,
  initialState,
  reducers: {
    
  }
});

export const {} = titleSlice.actions

export default titleSlice.reducer