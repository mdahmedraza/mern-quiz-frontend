import React, { useState} from 'react';
import Questions from './Questions';
import {useSelector, useDispatch} from 'react-redux';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import {PushAnswer} from '../hooks/setResult';
import {Navigate} from 'react-router-dom';

function Quiz(){
    const [check, setChecked] = useState(undefined)
    const result = useSelector(state => state.result.result);
    // const post = useSelector(state => state.posts.posts);
    // console.log(post);
    // const trace = useSelector(state => state.questions.trace);
    const {queue,trace} = useSelector(state => state.questions);
    const dispatch = useDispatch();
    function onNext(){
        console.log('on next click');
        if(trace < queue.length){
            dispatch(MoveNextQuestion());
            if(result.length<=trace){
                dispatch(PushAnswer(check))
            }
        }
        // reset the value of the checked variable
        setChecked(undefined)
    }
    function onPrev(){
        console.log('on prev click');
        if(trace>0){
            dispatch(MovePrevQuestion());
        }
    }
    function onChecked(check){
        console.log(check)
        setChecked(check)
    }
    // finished exam after the last question
    if(result.length && result.length>=queue.length){
        return <Navigate to={'/result'} replace="true"></Navigate>
    }
    return(
        <div>
            <h2>quiz application</h2>
            {/**display questions */}
            <Questions onChecked={onChecked} />
            <div>
                {trace > 0 ? <button onClick={onPrev}>Prev</button>:<>{/** you can must use div when you style it for containing space */}</>}
                <button onClick={onNext}>next</button>
            </div>
        </div>
    )
}

export default Quiz;