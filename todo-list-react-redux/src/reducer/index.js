import { combineReducers } from "redux";
import { todos } from "./reducer";

export default combineReducers({
  rootReducer: todos
});
