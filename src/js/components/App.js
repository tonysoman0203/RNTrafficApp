/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Component } from 'react'
import { Platform,StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { connect } from "react-redux";
import { SAY_HELLO, FETCH_DATA } from '../constants/action-types'
import { bindActionCreators } from 'redux'
import action, { fetchData } from '../actions'
import * as saga from '../saga'

const mapStateToProps = state => {
  return { trafficCams: state.trafficCams };
};

const mapDispatchToProps = (dispatch) => {
  let actions = bindActionCreators({ action, saga });
  return { ...actions, dispatch };
}

type Props = {}

class App extends Component<Props> {
  
  constructor(){
    super()
  }

  add(params: number, params2:number):number {
    return params+params2;  
  }
  
  componentDidMount(){
     
  }

  render() {
    
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
             Hello World !
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

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
