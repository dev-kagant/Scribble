import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './titleSlice'

let initialState;

if(localStorage.getItem('scribbleData')){
    initialState =  JSON.parse(localStorage.getItem('scribbleData'));
}else if(!localStorage.getItem('scribbleData')){
    initialState = {"siteTitle": "", "listFilter": '', "lists": []};
    localStorage.setItem("scribbleData", JSON.stringify(initialState))
}


export const store = configureStore({
  reducer: {
    title: titleReducer,
  },
})