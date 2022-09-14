    // action types
  export const ADD_RESULT = "ADD_RESULT";
  export const SET_RESULT = "SET_RESULT";
  
  // actions
  
  export const addResult = (result) => ({
    type: ADD_RESULT,
    payload: result,
  });
  
  export const setResult = (result) => ({
    type: SET_RESULT,
    payload: result,
  });