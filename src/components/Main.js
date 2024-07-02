import React, {useRef} from 'react';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Main(){
    const inputRef = useRef(null)
    // const post = useSelector(state => state.posts.posts);
    // console.log(post);
    return(
        <div className="container">
            <h1 className='title text-light'>quiz application</h1>
            <ol>
                <li>you will be asked 10 questions one after another.</li>
                <li>10 points is awarded for the corret answer.</li>
                <li>each questions has three options. you can choose only one option.</li>
                <li>you can review and change answers before the quiz finish.</li>
                <li>the result will be declared at the end of the quiz.</li>
            </ol>
            <form id="form">
                <input ref={inputRef} type="text" placeholder='Username' />
            </form>
            <div className='start'>
                <Link className='btn' to={'quiz'}>start</Link>
            </div>
        </div>
    )
}

export default Main;