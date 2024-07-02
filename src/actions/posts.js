import * as api from '../api';
import * as Action from '../redux/post_reducer'
import { useDispatch } from 'react-redux';

export const getPosts = () => async (dispatch) => {
    const dispatch = useDispatch();
    try{
        const {data} = await api.fetchPosts();
        dispatch(Action.getPostAction({data}));
    }catch(error){
        console.log(error.message)
    }
}