import React from 'react'
import { Component } from 'react'
import { Provider } from "react-redux";
import store from "./store/index";
import App from './components/App'
//Firebase
import * as firebase from 'firebase';
import { firebaseConfig } from '../js/config/config';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const rootRef = database.ref();
export const itemsRef = rootRef.child('image-list').child('image');

console.log(`itemsRef = ${itemsRef}`)
export default class RNTrafficApp extends Component {
    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

