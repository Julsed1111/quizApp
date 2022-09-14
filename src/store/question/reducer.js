import { ADD_QUESTION, SET_QUESTION } from "./actions";

const INITIAL_STATE = {
  questions: [],
};

export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_QUESTION:
      return { ...state, questions: [...payload] };
    case ADD_QUESTION:
      return { ...state, questions: [...state.questions, payload] };
    default:
      return state;
  }
}