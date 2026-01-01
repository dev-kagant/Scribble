import { createSlice } from '@reduxjs/toolkit'

let initialState;

if(localStorage.getItem('scribbleData')){
    initialState =  JSON.parse(localStorage.getItem('scribbleData'));
}else if(!localStorage.getItem('scribbleData')){
    initialState = {"siteTitle": "", "count": 0, "lists": []};
    localStorage.setItem("scribbleData", JSON.stringify(initialState))
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state) => {
      console.log('State', state);
    },
    updateData: (state, action) => {},
  }
});

export const {addTitle, removeTitle} = dataSlice.actions

export default dataSlice.reducer 