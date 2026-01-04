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
  }
});


const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    addTitle: (state, action) => {
        state.siteTitle = action.payload;
        localStorage.setItem("scribbleData", JSON.stringify({...state, "siteTitle": action.payload}))
    },
  }
});


const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
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
    title: titleSlice.reducer,
    lists: listsSlice.reducer,
  },
});

export const {getData, updateData} = dataSlice.actions;
export const {addTitle} = titleSlice.actions;
export const {createList, updateLists} = listsSlice.actions;