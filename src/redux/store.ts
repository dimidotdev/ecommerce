import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const preloadedState = {};
export const store = createStore(rootReducer, preloadedState, applyMiddleware(logger));