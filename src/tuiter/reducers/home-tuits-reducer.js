import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const homeTuitsSlice = createSlice({
    name: 'homeTuits',
    initialState: tuits
});

export default homeTuitsSlice.reducer;