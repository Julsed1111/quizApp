import { getAnswers, createAnswer, deleteAnswer, updateAnswer } from "../../services/Services";
  
  // action types
  export const ADD_ANSWER = "ADD_ANSWER";
  export const SET_ANSWER = "SET_ANSWER";
  
  // actions
  
  export const addAnswer = (answer) => ({
    type: ADD_ANSWER,
    payload: answer,
  });
  
  export const setAnswer = (answer) => ({
    type: SET_ANSWER,
    payload: answer,
  });
  
  export const fetchAnswers = () => {
    return function (dispatch) {
      getAnswers().then((answers) => dispatch(setAnswer(answers)));
    };
  };
  
  // thunks
  export const removeAnswerByObj = (answer) => {
    return function (dispatch, getState) {
      deleteAnswer(answer).then(() => {
        const { state } = getState();
        const answers = state.answers.filter((answerItem) => answerItem.Id !== answer.Id);
        dispatch(setAnswer(answers));
      });
    };
  };
  
  export const updateAnswerByObj = (answer) => {
    return function (dispatch, getState) {
      const { state } = getState();

      const updatedAnswers = state.answers.map((answerItem) => answerItem.Id === answer.Id ? answer : answerItem);
      let updatedAnswer = updatedAnswers.find((answerItem) => answerItem.Id === answer.Id);
  
      updateAnswer(updatedAnswer).then(() => {
        dispatch(setAnswer(updatedAnswers));
      });
    };
  };
  
  export const createNewAnswer = (answer) => {
    return function (dispatch) {
      createAnswer(answer).then(() => {
        dispatch(setAnswer(answer));
      });
    };
  };