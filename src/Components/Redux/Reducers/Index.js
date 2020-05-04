import { combineReducers } from "redux";
import courses from "./CourceReducer";

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
