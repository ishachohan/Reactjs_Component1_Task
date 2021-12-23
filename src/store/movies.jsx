import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "posts",
    initialState: {
        list: [],
        genrelist:[],
        loading: false,
    },
    reducers: {
        postsRequested: (posts, action) => {
            posts.loading = true;
        },

        postsReceived: (posts, action) => {
            posts.list = action.payload;     
            posts.loading = false;
        },

        postsRequestFailed: (posts, action) => {
            posts.loading = false;
        },
    },
});
export default slice.reducer;

const { postsRequested, postsReceived, postsRequestFailed } = slice.actions;

export const loadMovies = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url:"/movies?limit=6",
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed.type,
        })
    );
};


export const searchMovies = (name) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url:"/movies?search={name}&searchBy=title&limit=6",
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed.type,
        })
    );
};

export const filterbygenres = (genretype)  => {
    return (
        apiCallBegan({           
            url:"/movies?filter={genretype}",
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed.type,
        })
    );
};