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
import action, { fetchData } from '../actions'
import * as saga from '../saga'
import MyCardItem from './MyCardItem'

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
    this.state = {
      data :  [],
      isLoading: false
    }
  }

  componentWillMount(){}

  componentDidMount(){}

  renderRow(item){
    console.log(`renderRow = item ? ${JSON.stringify(item)}`);
      return(
        <View style={{flex:1, justifyContent: 'center'}}>
          <MyCardItem
            image={item.image}
            key={item.key}
          />
        </View>
      )
  }

  renderFlatList(){
    if(this.state.isLoading){
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
            this.setState({isLoading: true})
            this.props.itemRefs.on('value', (snap)=>{
              console.log(JSON.stringify(snap.val()))
              const items = []
              snap.forEach((child) => {
                console.log("componentWillMount ="+JSON.stringify(child))
                
                items.push({
                  image: child,
                  key: child.key
                });
                
              });
              console.log(`componentWillMount items = ${JSON.stringify(items)}`)
              this.setState({data: items, isLoading: false})
            })
          }}>
            <Text>Refresh</Text>
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
