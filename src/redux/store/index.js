import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import createReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

let store = null;

store = compose(composeWithDevTools(applyMiddleware(...middleware)))(
  createStore
)(createReducer());

const configureStore = () => {
  return store;
};

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default configureStore();
