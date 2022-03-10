import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore, combineReducers } from "redux";
import imagesReducer from "./reducers/images";
import rootSaga from "./sagas";
const rootReducer = combineReducers({ imagesReducer });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
