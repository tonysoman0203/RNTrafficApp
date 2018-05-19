// src/js/reducers/index.js
import { ADD_TRAFFIC_CAM, SAY_HELLO, FETCH_DATA }  from "../constants/action-types";

const initialState = {
    trafficCams: []
};

const rootReducer = (state = initialState, action) => {
    console.log(`state = ${JSON.stringify(state)}  action = ${JSON.stringify(action)}`);
    switch (action.type){
        case ADD_TRAFFIC_CAM:
            return { ...state, trafficCams: [...state.trafficCams, action.payload] };
        case SAY_HELLO:
            return state;
        case FETCH_DATA:
            
             return { ...state, trafficCams: [...state.trafficCams, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;