import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { counterReducer } from "./counterReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});