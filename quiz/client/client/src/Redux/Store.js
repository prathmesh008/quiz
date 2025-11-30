import {combineReducers, configureStore } from '@reduxjs/toolkit';
import questionreducer from './Questionreducer';
import  resultreducer   from './Resultreducer';
const rootreducer=combineReducers({
    questions: questionreducer,
    result: resultreducer
});
export default configureStore({
    reducer: rootreducer
});