import {combineReducers} from 'redux';
import {QuizReducer} from './QuizReducer'

export const rootReducer = combineReducers({
    quiz:QuizReducer
})