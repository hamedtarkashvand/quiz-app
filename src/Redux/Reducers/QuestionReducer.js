const initialState = {
userName:null,
allQuestions:[],
index:0
}

export const questionsReducer = (
state = initialState,
action 
) => {
    switch (action.type) {
        case 'GET_USER_NAME' :
            return {
                ...state,
                userName:action.payload
            }

        case 'GET_ALL_QUESTION':
            return {
                ...state,
                allQuestions:[...state,action.payload]

            }
        case 'INDEX' :
            return {
                ...state,
                index:action.payload
            }
        default:
           return state
    }
}