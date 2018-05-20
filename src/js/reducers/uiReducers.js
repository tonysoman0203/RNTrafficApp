import { handleActions } from 'redux-actions';
import { UIState } from '../constants/models'
import * as actions from '../constants/action-types'

const uiReducers = handleActions({
    FETCH_DATA_LOADING: (state) => (
      state.set(
        'isModalVisible',
        !state.get('isModalVisible')
      )
    ),  
  }, UIState);
  export default uiReducers;