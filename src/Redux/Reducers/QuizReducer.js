import {actionType} from '../Actions'

const initState = {
userName:null,
allQuestions:[],
index:0,
loading:false
}

 const QuizReducer = (state = initState, action ) => {
    switch (action.type) {
        case actionType.SET_USER_NAME :
            return {
                ...state,
                userName:action.payload
            };

        case actionType.SET_QUESTIONS:
            return {
                ...state,
                allQuestions:action.payload

            };
        case actionType.CHANG_INDEX :
            return {
                ...state,
                index:action.payload 
            };
        case actionType.CHANG_LOADING :
            return {
                ...state,
                loading:action.payload
            };
        default:
           return state
    }
}

export default QuizReducer