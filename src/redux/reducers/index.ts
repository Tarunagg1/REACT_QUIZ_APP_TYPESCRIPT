import { combineReducers } from 'redux';

import question from './exam.reducer';


const rootReducer = combineReducers({
    question,
})


export default rootReducer;