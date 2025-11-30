import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetallaction } from '../Redux/Questionreducer'
import { resetresultaction, setuserid } from '../Redux/Resultreducer'
import '../Styles/Main.css';
function Main() {
    const inputref = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const startQuiz = () => {
        const username = inputref.current.value.trim();
        if (!username) {
            alert("Please enter your name before starting the quiz.");
            return;
        }
        dispatch(resetallaction());
        dispatch(resetresultaction());
        dispatch(setuserid(username));
        navigate('/quiz');
    };

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>10 points is awarded for the correct answer. </li>
                <li>Each question has three options. You can choose only one option.</li>
                <li>You can review and change answers before the quiz finishes.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>

            <form id='form' onSubmit={(e) => { e.preventDefault(); startQuiz(); }}>
                <input ref={inputref} className='userid' type="text" placeholder="Enter your name" />
            </form>

            <div className='start'>
                <button className='btn' onClick={startQuiz}>
                    Start quiz
                </button>
            </div>
        </div>
    )
}

export default Main