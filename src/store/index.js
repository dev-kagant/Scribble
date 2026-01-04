import { configureStore, createSlice } from '@reduxjs/toolkit'

let initialState;

if(localStorage.getItem('scribbleData')){
    initialState =  JSON.parse(localStorage.getItem('scribbleData'));
}else if(!localStorage.getItem('scribbleData')){
    initialState = {"siteTitle": "", "count": 0, "lists": []};
    localStorage.setItem("scribbleData", JSON.stringify(initialState))
}


const findList = () => {
  let currentList = data.lists;

  for(i=0; i < currentList.length; i++ ){
    console.log('what is i', currentList[i]);
  }
};


// const updateData = () => {};


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


const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    addTitle: (state, action) => {
        // const data = JSON.parse(localStorage.getItem('scribbleData'));
        state.siteTitle = action.payload;
        localStorage.setItem("scribbleData", JSON.stringify({...state, "siteTitle": action.payload}))
    },
    removeTitle: (state) => {
        state.siteTitle = "";
        localStorage.setItem("scribbleData", JSON.stringify({...state, "siteTitle": ""}))
    },
  }
});


const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    createList: (state, action) => {
      // const data = JSON.parse(localStorage.getItem('scribbleData'));

      console.log('data', state);
      console.log('What we get', state.lists);
      
      let newList = {
        "id": state.count + 1,
        "listName": action.payload.listName,
        "count": action.payload.count,
        "lists": action.payload.items
      }
      localStorage.setItem("scribbleData",  JSON.stringify({...state, "count": state.count+1, "lists": [...state.lists, newList]}))
    },
    removeList: (state, action) => {},
    updateCount: () => {},
    addItem: (state, action) => {},
    removeItem: (state) => {},
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
export const {addTitle, removeTitle} = titleSlice.actions;
export const {createList} = listsSlice.actions;