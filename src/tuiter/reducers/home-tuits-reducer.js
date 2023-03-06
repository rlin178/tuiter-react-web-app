import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const homeTuitsSlice = createSlice({
    name: 'homeTuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        homeTuitLikeToggle(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)

            tuit.likes = tuit.liked? tuit.likes - 1: tuit.likes + 1;
            tuit.liked = !tuit.liked
        }
    }
});

export const {createTuit, deleteTuit, homeTuitLikeToggle} = homeTuitsSlice.actions
export default homeTuitsSlice.reducer;