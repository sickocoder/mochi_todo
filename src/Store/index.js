import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import TodoReducer from "./reducers";
import TodoSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(TodoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(TodoSaga);

export default store;
