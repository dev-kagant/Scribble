import { createSlice } from '@reduxjs/toolkit'

const data = JSON.parse(localStorage.getItem('scribbleData'));

console.log('data', data);

let initialState = {
  "id": 0,
  "name": "",
  "count": 0,
  "array": [],
}

const findList = () => {
  let currentList = data.lists;

  for(i=0; i < currentList.length; i++ ){
    console.log('what is i', currentList[i]);
  }
};

const updateData = () => {};


const listsSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    createList: (state, action) => {},
    removeList: (state, action) => {},
    updateCount: () => {},
    addItem: (state, action) => {},
    removeItem: (state) => {},
  }
});

export const {addTitle, removeTitle} = listsSlice.actions

export default listsSlice.reducer 