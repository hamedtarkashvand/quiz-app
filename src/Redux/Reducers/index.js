import {combineReducers} from 'redux';
import {questionsReducer} from './QuestionReducer'

export const rootReducer = combineReducers({
    question:questionsReducer
})