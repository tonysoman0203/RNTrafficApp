import * as actions from '../constants/action-types'
import {RNFS} from 'react-native-fs'

export const apiMiddleware = store => next => action => {
    next(action);
    switch(action.type){
        case actions.FETCH_DATA:
            store.dispatch({type: actions.FETCH_DATA_LOADING})

            
        break;

    }    
}