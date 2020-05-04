import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/Index";
import reduxImmutableStateInveriant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhance = window.__REDUX_DEVTOOL_EXTENTION_COMPOSE__ || compose; //add support for redux DevTool
  return createStore(
    rootReducer,
    initialState,
    composeEnhance(applyMiddleware(reduxImmutableStateInveriant()))
  );
}
