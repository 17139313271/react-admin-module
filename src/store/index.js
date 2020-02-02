import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import reducer from "./reducer";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, promise, logger))
);

export default store;
