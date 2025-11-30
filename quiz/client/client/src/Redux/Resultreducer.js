import { createSlice } from "@reduxjs/toolkit";

export const resultreducer = createSlice({
    name: 'result',
    initialState: {
        userid: null,
        result: []
    },
    reducers: {
        setuserid: (state, action) => {
            state.userid = action.payload;
        },
        pushresultaction: (state, action) => {
            state.result.push(action.payload);
        },
        updateresultaction: (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked,trace,trace+1);
        },
        resetresultaction: () => {
            return {
                userid: null,
                result: []
            }
        }
    }
});
export const { setuserid, pushresultaction, resetresultaction, updateresultaction } = resultreducer.actions;
export default resultreducer.reducer;
