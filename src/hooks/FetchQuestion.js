import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as Action from '../redux/question_reducer';
import {getServerData} from '../helper/helper';
import data, {answers} from '../database/data';


// fetch question hook to fetch api data and set value to store.
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({Loading: false, apiData: [], serverError: null})

    // useEffect(()=>{
    //     setGetData(prev => ({...prev, isLoading: true}));
    //     // async function fetch backend data
    //     (async () => {
    //         try{
    //             const [{questions, answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
    //             if(questions.length>0){
    //                 setGetData(prev => ({...prev, isLoading: false}));
    //                 setGetData(prev => ({...prev, apiData: questions}));
    //                 dispatch(Action.startExamAction({question: questions, answers}))
    //             }else{
    //                 throw new Error("no question available");
    //             }
    //         }catch(error){
    //             setGetData(prev => ({...prev, isLoading: false}));
    //             setGetData(prev => ({...prev, serverError: error}));
    //         }
    //     })();
    // }, [dispatch]);
    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading: true}));
        (async () => {
            try{
                let question = await data;
                // const q = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                // console.log(q)
                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading: false}));
                    setGetData(prev => ({...prev, apiData: question}));
                    //dispatch an action...
                    dispatch(Action.startExamAction({question, answers}))
                }else{
                    throw new Error("no question available")
                }
            }catch(error){
                setGetData(prev => ({...prev, isLoading: false}));
                setGetData(prev => ({...prev, serverError: error}))
            }
        })();
    }, [dispatch]);
    return [getData, setGetData]
}
// move action dispatch function
export const MoveNextQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.moveNextAction());
    }catch(error){
        console.log(error)
    }
}

// prev action dispatch function
export const MovePrevQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}