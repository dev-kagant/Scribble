import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('scribbleData'));

const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    addTitle: (state, action) => {
        state.siteTitle = action.payload;
        localStorage.setItem("scribbleData", JSON.stringify({...state, "siteTitle": action.payload}))
    },
    removeTitle: (state) => {
        state.siteTitle = "";
        localStorage.setItem("scribbleData", JSON.stringify({...state, "siteTitle": ""}))
    },
  }
});

export const {addTitle, removeTitle} = titleSlice.actions

export default titleSlice.reducer 