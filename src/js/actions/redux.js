import * as actions from '../constants/action-types'
import { createAction } from 'redux-actions'

export const fetchData = createAction(actions.FETCH_DATA);

/*
export const apiMiddleware = store => next => action => {
    next(action);
    switch(action.type){
        case actions.FETCH_DATA:
            store.dispatch({type: actions.FETCH_DATA_LOADING})
            // Call Firebase to get Data

            
        break;

    }    
}
*/