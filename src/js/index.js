import React from 'react'
import { Component } from 'react'

import { Provider } from "react-redux";
import  store  from "./store/index";
import App from "./components/App";
import * as firebase from 'firebase';
import { firebaseConfig } from '../js/config/config';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const rootRef = firebaseApp.database().ref();
const itemsRef = rootRef.child('image-list');

export default class RNTrafficApp extends Component {
    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

