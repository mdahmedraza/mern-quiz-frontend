import React, {useState, useEffect} from 'react';
import './Question.css';
import { useFetchQuestion } from '../hooks/FetchQuestion';
import {useDispatch, useSelector} from 'react-redux';
import {updateResult} from '../hooks/setResult';

function Questions({onChecked}){
    const [checked, setChecked] = useState(undefined);
    const {trace} = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{isLoading, apiData, serverError}] = useFetchQuestion();
    useSelector(state => console.log(state));
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(updateResult({trace, checked}))
    }, [checked])
    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace, checked}))
    }
    if(isLoading) return <h3>is loading</h3>
    if(serverError) return <h3>{serverError || "unknown error"}</h3>
    return(
        <div>
            <h2>{questions?.question}</h2>
            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                value={false}
                                name="options"
                                id={`q${i}-option`}
                                onChange={() => onSelect(i)}
                            />
                            <label htmlFor={`q${i}-option`}>{q}</label>
                            <div className={result[trace] == i? 'checked': ''}></div>
                            {/* <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div> */}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Questions;