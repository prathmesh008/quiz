import React from 'react'
import Questions from './Questions';
import {useSelector ,useDispatch} from 'react-redux'
import { useEffect , useState} from 'react';
import { movenextquestion ,moveprevquestion } from '../Hooks/Fetchquestions.js';
import { pushanswer } from '../Hooks/setresult.js';
import {Navigate} from 'react-router-dom'

function Quiz() {
    // const trace=useSelector(state=>state.questions.trace)
    const[checked, setChecked] =useState(undefined);
    const result=useSelector(state=>state.result.result);
    const {queue,trace}=useSelector(state=>state.questions)
    const dispatch=useDispatch();
     
    function onNext(){
        // console.log("Next question");
        if(trace<queue.length){
            dispatch(movenextquestion());

            if(result.length<=trace) dispatch(pushanswer(checked));
        }
        setChecked(undefined);
    }
    function onPrev(){
        // console.log("Previous question");
        if(trace>0){
            dispatch(moveprevquestion());
        }
    }
    function onchecked(check){
      // console.log(check);
      setChecked(check);
    }

    if(result.length && result.length>=queue.length){
      return <Navigate to="/result" replace={true}/>
    }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz</h1>
      <Questions onchecked={onchecked} />

      <div className='grid'>
        {trace>0 ? <button className='btn prev' onClick={onPrev}>Previous</button> : <div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz