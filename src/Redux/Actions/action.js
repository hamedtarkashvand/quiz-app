export const getQuestions = (question) => ({
    type: 'GET_ALL_QUESTION',
    payload: question,
  });
export const updateIndex = (index) => ({
    type: 'INDEX',
    payload: index,
  });
export const setUserName = (userName) => ({
    type: 'SET_USER_NAME',
    payload: userName,
  });