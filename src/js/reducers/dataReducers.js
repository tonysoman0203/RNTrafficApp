import { handleActions } from 'redux-actions';
import { DataState }  from "../constants/models";
import * as actions from '../constants/action-types'

const dataReducers = handleActions({
    FETCH_DATA: (state, {payload}) => (
        state.set('image',payload.image)
    )
}, DataState)

export default dataReducers;
