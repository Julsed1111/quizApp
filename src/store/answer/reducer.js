import { ADD_ANSWER, SET_ANSWER } from "./actions";

const INITIAL_STATE = {
  answers: [],
};
export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_ANSWER:
      return { ...state, answers: [...payload] };
    case ADD_ANSWER:
      return { ...state, answers: [...state.answers, payload] };
    default:
      return state;
  }
}