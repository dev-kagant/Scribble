import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './titleSlice'
import listsReducer from './listsSlice'
import dataReducer from './dataSlice'

let initialState;

if(localStorage.getItem('scribbleData')){
    initialState =  JSON.parse(localStorage.getItem('scribbleData'));
}else if(!localStorage.getItem('scribbleData')){
    initialState = {"siteTitle": "", "count": 0, "lists": []};
    localStorage.setItem("scribbleData", JSON.stringify(initialState))
}


export const store = configureStore({
  reducer: {
    title: titleReducer,
    lists: listsReducer,
    data: dataReducer,
  },
})