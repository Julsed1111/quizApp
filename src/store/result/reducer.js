import { ADD_RESULT, SET_RESULT } from "./actions";

const INITIAL_STATE = {
  results: [],
  currentPosition: 0,
  rightAnsweredQuestionsCounter: 0,
};

export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_RESULT:
      return { ...state, results: [...payload] };
    case ADD_RESULT:
      return { ...state, results: [...state.results, payload], currentPosition: state.currentPosition + 1, rightAnsweredQuestionsCounter: payload.isRight === true ? state.rightAnsweredQuestionsCounter + 1 : state.rightAnsweredQuestionsCounter};
    default:
      return state;
  }
}