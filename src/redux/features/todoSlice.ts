import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos:[]
}
const todoSlice = createSlice({
    name:"Todo",
    initialState,
    reducers:{}
})

export default todoSlice.reducer;