/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Component } from 'react'
import { View,Platform,StyleSheet, FlatList} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Spinner, Right, Body, Icon, Text, Tab, Tabs, ScrollableTab } from 'native-base';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import action, { getDataByRegion } from '../actions'
import MyCardItem from './MyCardItem'
import * as Actions from '../constants/action-types'
import * as Models from '../constants/models'
import moment from 'moment'
import { itemsRef } from '../index'
import store from "../store/index";
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  let actions = bindActionCreators({ action });
  return { ...actions, dispatch, callService: (reg)=>dispatch(getDataByRegion(reg)) };
}


type Props = {}

class App extends Component<Props> {
  
  constructor(){
    super()
    this.state = {
      data :  [],
    }
  }

  componentWillMount(){}

  componentDidMount(){
    this.props.callService("Hong Kong Island")
  }
  
  renderTab1(){
    if(this.props.state.UIReducers.get(`isLoading`)){
      return (<Spinner />)
    }else{
      // console.log(`renderTab1 this.state.data =${JSON.stringify(this.state.data)}`);
      return (<Tab1 />)
    }
  }

  renderTab2(){
    console.log(`renderTab2 `);
    if(this.props.state.UIReducers.get(`isLoading`)){
      return (<Spinner />)
    }else{
      // console.log(`renderTab1 this.state.data =${JSON.stringify(this.state.data)}`);
      return (<Tab2 />)
    }
  }

  render() {
    // console.log(`this.props.state.DataReducers.get = ${JSON.stringify(this.props.state.DataReducers)}`)
   
    return (
      <Container>
      <Header hasTabs >
        <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
        </Left>
        <Body>
            <Title>RNTrafficApp</Title>
        </Body>
        <Right/>
      </Header>
      <Tabs 
      
      initialPage={0} onChangeTab={(object)=>{
        console.log(`onChangeTab from : ${object.from} i= ${object.i} `);
          const from = object.from
          const to = object.i
          if(from < to){
            this.props.callService('Kowloon')
          }else{
            this.props.callService('Hong Kong Island')
          }
      }}
      >
        <Tab ref="tab1" heading="Hong Kong Island" > 
          {this.renderTab1()}
        </Tab>
        <Tab ref="tab2" heading="Kowloon">
          {this.renderTab2()}
        </Tab>
      </Tabs>
        
    </Container>
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
