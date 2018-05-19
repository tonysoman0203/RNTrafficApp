//src/js/actions/index.js
import { ADD_TRAFFIC_CAM, SAY_HELLO, FETCH_DATA } from '../constants/action-types';
import { parseString } from "react-native-xml2js";
import DataSets from '../../datasets/index'
import RNFS from "react-native-fs"

export const addTrafficCameras = trafficCamera => ({
    type: ADD_TRAFFIC_CAM,
    payload : trafficCamera
})

export const helloSaga = helloSaga => ({
    type:SAY_HELLO,
    payload: {}
})

export const fetchData = data => (
    {
        type: FETCH_DATA,
        payload: (
            RNFS.readFileAssets(DataSets.SOURCE.EN,"utf8")
            .then((res) => {
                //console.log(res)
                parseString(res,(err, result)=>{
                    console.log(result)
                    return result;
                })
            })
        )
    }
)