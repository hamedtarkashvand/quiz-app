export const actionType = {
    SET_USER_NAME:'SET_USER_NAME',
    SET_QUESTIONS:'SET_QUESTIONS',
    CHANG_INDEX:'CHANG_INDEX',
    CHANG_LOADING:'CHANG_LOADING'
}

export const setQuestions = (question) => ({
    type: actionType.SET_QUESTIONS,
    payload: question,
  });
  
export const updateIndex = (index) => {
    return {
       type: actionType.CHANG_INDEX,
       payload: index,
    }
};
export const setUserName = (userName) => ({
    type: actionType.SET_USER_NAME,
    payload: userName,
  });

export const changLoading = (loading) => ({
    type: actionType.CHANG_LOADING,
    payload: loading,
  });