import { getQuestions, createQuestion, deleteQuestion, updateQuestion } from "../../services/Services";
  
  // action types
  export const ADD_QUESTION = "ADD_QUESTION";
  export const SET_QUESTION = "SET_QUESTION";
  
  // actions
  
  export const addQuestion = (question) => ({
    type: ADD_QUESTION,
    payload: question,
  });
  
  export const setQuestions = (question) => ({
    type: SET_QUESTION,
    payload: question,
  });
  
  export const fetchQuestion = () => {
    return function (dispatch) {
        getQuestions().then((questions) => {dispatch(setQuestions(questions));});
        // getQuestions().then((questions) => {console.log(questions)});
    };
  };
  
  // thunks
  export const removeQuestionByObj = (question) => {
    return function (dispatch, getState) {
      deleteQuestion(question).then(() => {
        const { state } = getState();
        const questions = state.questions.filter((questionItem) => questionItem.Id !== question.Id);
        dispatch(setQuestions(questions));
      });
    };
  };
  
  export const updateQuestionByObj = (question) => {
    return function (dispatch, getState) {
      const { state } = getState();

      const updatedQuestions = state.questions.map((questionItem) => questionItem.Id === question.Id ? question : questionItem);
      let updatedQuestion = updatedQuestions.find((questionItem) => questionItem.Id === question.Id);
  
      updateQuestion(updatedQuestion).then(() => {
        dispatch(setQuestions(updatedQuestions));
      });
    };
  };
  
  export const createNewQuestion = (question) => {
    return function (dispatch) {
      createQuestion(question).then(() => {
        dispatch(addQuestion(question));
      });
    };
  };