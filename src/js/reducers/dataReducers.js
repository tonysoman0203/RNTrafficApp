import * as Models from '../constants/models'
import * as Actions from '../constants/action-types'
import { itemsRef } from '../index'
import moment from 'moment'

const DataReducers = (state = {} ,action) =>{
    switch(action.type){
        case Actions.FETCH_DATA_RECEIVED: {
            console.log(`dataReducers : action = ${JSON.stringify(action)}`);
            var items = []
            action.data.forEach((child) => {
                console.log("componentWillMount ="+JSON.stringify(child))
                
                items.push({
                  image: child,
                  key: child.key,
                  updatedAt: moment()
                });
                
            });
            console.log(`After For loop = ${JSON.stringify(items)}`);
            return({
                ...state,
                items
            })

        }
        default: return state
    }
}

export default DataReducers