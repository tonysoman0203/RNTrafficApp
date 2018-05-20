// src/js/store/index.js
import { createStore, applyMiddleware  } from "redux";
import createSagaMiddleware from 'redux-saga'
import ReduxThunk from 'redux-thunk'
import Immutable from 'immutable';
import { helloSaga } from '../saga/index'
import rootReducer from "../reducers/index";
import { createLogger  }from 'redux-logger'
const initialState = Immutable.Map();

const store = createStore(rootReducer,
    initialState,
    applyMiddleware(createSagaMiddleware(helloSaga)),
    applyMiddleware(ReduxThunk),
    applyMiddleware(createLogger({ stateTransformer: state => state.toJS() }))
);

export default store;