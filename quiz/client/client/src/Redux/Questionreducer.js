import { createSlice } from "@reduxjs/toolkit";


const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers: {
        startexamaction: (state, action) => {
            let { questions, answers} = action.payload

            return {
                ...state,
                queue:questions,
                answers:answers
            }
        },
        movenextaction: (state) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        moveprevaction: (state) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
        resetallaction:()=>{
            return{
                queue:[],
                answers:[],
                trace:0
            }
        }
    }
});

export const { startexamaction, movenextaction, moveprevaction, resetallaction } = questionSlice.actions;
export default questionSlice.reducer;