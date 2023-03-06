import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const homeTuitsSlice = createSlice({
    name: 'homeTuits',
    initialState: tuits,
    reducers: {
        addTodo(state, action) {
            state.push({
                _id: (new Date()).getTime(),
                do: action.payload.do,
                done: false
            });
        },
        deleteTodo(state, action) {
            const index = action.payload
            state.splice(index, 1)
        },
        homeTuitLikeToggle(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)

            tuit.likes = tuit.liked? tuit.likes - 1: tuit.likes + 1;
            tuit.liked = !tuit.liked
        }
    }
});

export const {addTodo, deleteTodo, homeTuitLikeToggle} = homeTuitsSlice.actions
export default homeTuitsSlice.reducer;