/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Component } from 'react'
import { View,Platform,StyleSheet, FlatList} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Spinner, Right, Body, Icon, Text } from 'native-base';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import action, { callFireBase } from '../actions'
import MyCardItem from './MyCardItem'
import * as Actions from '../constants/action-types'
import * as Models from '../constants/models'
import moment from 'moment'
import { itemsRef } from '../index'
import store from "../store/index";


const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  let actions = bindActionCreators({ action });
  return { ...actions, dispatch, callService: ()=>dispatch(callFireBase()) };
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
    this.props.callService()
  }

  componentWillReceiveProps(nextprops){
    //console.log(`componentWillReceiveProps = ${JSON.stringify(nextprops)}`);
    if(nextprops.state.DataReducers){
      this.setState({
        data: nextprops.state.DataReducers.items
      })
    }
  }

  renderRow(item){
    //console.log(`renderRow = item ? ${JSON.stringify(item)}`);
      return(
        <View style={{flex:1, justifyContent: 'center'}}>
          <MyCardItem
            item={item}
            key={item.key}
          />
        </View>
      )
  }

  renderFlatList(){
    if(this.props.state.UIReducers.get(`isLoading`)){
      return (<Spinner />)
    }else{
      return (
      <FlatList
          data={this.state.data}
          keyExtractor={item=>item.key}
          renderItem={({item}) => this.renderRow(item)}
        />
      )
    }
  }

  async onRefreshButtonClick(){
    this.props.callService()
  }

  render() {
    //console.log(`this.props.state.DataReducers.get = ${JSON.stringify(this.props.state.DataReducers)}`)
   
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>RNTrafficApp</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        {this.renderFlatList()}
      </Content>
      <Footer>
        <FooterTab>
          <Button full onPress={()=>{
            this.onRefreshButtonClick()
          }}>
            <Text>Refresh</Text>
          </Button>
        </FooterTab>
      </Footer>
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
