import {createSlice} from '@reduxjs/toolkit';

export const postReducer = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        getPostAction: (state, action) => {
            let {posts} = action.payload
            return{
                ...state,
                posts
            }
        }
    }
})

export const {getPostAction} = postReducer.actions;
export default postReducer.reducer;