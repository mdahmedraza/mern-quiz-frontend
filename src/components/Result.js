import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import {resetAllAction} from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import {attempts_Number, earnPoints_Number, flagResult} from '../helper/helper';

function Result(){
    const dispatch = useDispatch();
    const {questions: {queue, answers}, result: {result, userId}} = useSelector(state => state)
    useEffect(() => {
        console.log(flag)
    })
    const totalPoints = queue.length * 10;
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)
    console.log({result, username: userId, attempts, points: earnPoints, achived: flag?"Passed": "failed"})
    function onRestart(){
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    }
    return(
        <div>
            <h2>quiz application</h2>
            <div>
                <div>
                    <span>username: </span>
                    <span>daily tution</span>
                </div>
                <div>
                    <span>total quiz points: </span>
                    <span>{totalPoints || 0}</span>
                </div>
                <div>
                    <span>total questions: </span>
                    <span>{queue.length || 0}</span>
                </div>
                <div>
                    <span>total attempts: </span>
                    <span>{attempts || 0}</span>
                </div>
                <div>
                    <span>total earn points: </span>
                    <span>{earnPoints || 0}</span>
                </div>
                <div>
                    <span>quiz result: </span>
                    <span style={{color: `${flag? "#2aff95": "#ff2a66"}`}}>{flag ? "Passed": "failed"}</span>
                </div>
            </div>
            <div>
                <Link to={'/'} onClick={onRestart}>restart</Link>
            </div>
            <div>
                <ResultTable />
            </div>
        </div>
    )
}

export default Result;