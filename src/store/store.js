import { combineReducers } from "redux";
import question from "./question/reducer";
import answer from "./answer/reducer";
import result from './result/reducer'

import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    question,
    answer,
    result,
});

export default configureStore({
  reducer: rootReducer,
});