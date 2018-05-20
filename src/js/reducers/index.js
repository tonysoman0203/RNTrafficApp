import { combineReducers } from 'redux-immutable';
import ui from './uiReducers'
import data from './dataReducers'
const rootReducers = combineReducers({
    ui, data
})

export default rootReducers;