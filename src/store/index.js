import { configureStore, createSlice } from '@reduxjs/toolkit'

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
    addTitle: (state, action) => {
        state.siteTitle = action.payload;
        localStorage.setItem("scribbleData", JSON.stringify({...state, "siteTitle": action.payload}))
    },
    createList: (state, action) => {
      let newList = {
        "id": state.count + 1,
        "listName": action.payload.listName,
        "count": action.payload.count,
        "items": action.payload.items
      }
      localStorage.setItem("scribbleData",  JSON.stringify({...state, "count": state.count+1, "lists": [...state.lists, newList]}))
    },
    updateLists: (state, action) => {
      state.lists = action.payload;
      localStorage.setItem("scribbleData",  JSON.stringify({...state, "lists": action.payload}))
    },
    removeList: (state, action) => {
      state.lists = action.payload;
      localStorage.setItem("scribbleData",  JSON.stringify({...state, "count":state.count-1, "lists": action.payload}))
    },
  }
});


export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export const {addTitle, getData, updateData, createList, updateLists} = dataSlice.actions;