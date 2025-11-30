import mongoose from "mongoose";
const {Schema}=mongoose;

const questionmodel=new Schema({
    questions:{type:Array, default:[]},
    answers:{type:Array, default:[]},
    createdat: {type:Date, default:Date.now}
});

const Questions = mongoose.model('Question', questionmodel);
export default Questions;