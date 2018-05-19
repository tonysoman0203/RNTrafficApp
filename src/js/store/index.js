// src/js/store/index.js
import { createStore, applyMiddleware  } from "redux";
import createSagaMiddleware from 'redux-saga'
import ReduxThunk from 'redux-thunk'

import { helloSaga } from '../saga/index'
import rootReducer from "../reducers/index";
import logger from 'redux-logger'

const store = createStore(rootReducer,
    applyMiddleware(createSagaMiddleware(helloSaga)),
    applyMiddleware(ReduxThunk),
    applyMiddleware(logger)
    );

    
//testing    
store.dispatch(helloSaga)

export default store;