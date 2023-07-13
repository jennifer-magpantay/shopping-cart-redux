import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducers } from "./modules/rootReducer";
import saga from "./modules/cart/saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const middlewares = [sagaMiddleware];
export const store = createStore(rootReducers, applyMiddleware(...middlewares));

// then run the saga
sagaMiddleware.run(saga);
