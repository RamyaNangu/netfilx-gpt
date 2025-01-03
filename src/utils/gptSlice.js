import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGPTSearch:false
    },
    reducers:{
        toggleGPTsearchView: (state,action)=>{
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
})

export const {toggleGPTsearchView} = gptSlice.actions

export default gptSlice.reducer;