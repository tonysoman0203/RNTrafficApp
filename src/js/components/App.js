/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Component } from 'react'
import { View,Platform,StyleSheet, FlatList} from 'react-native';
import { Footer, FooterTab, Button, Text} from 'native-base'
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
      data :  []
    }
  }

  componentWillMount(){}

  
  render() {
    console.log(`render = ${JSON.stringify(this.state.data)}`)
    console.log(`data size = ${this.state.data.lengthrr}`)
    return (
      <View style={{flex:1}}>
        <FlatList
              style={{flex:1, backgroundColor: 'white'}}
              data={this.state.data}
              keyExtractor={(item, index) => item._key}
              renderItem={({item})=>{
                <View>
                  <Text>{item._keu}</Text>
                </View>
              }}
          />
          <Footer>
          <FooterTab>
            <Button full onPress={()=>
              this.props.itemRefs.on('value', (snap)=>{
                console.log(JSON.stringify(snap.val()))
                const items = []
                snap.forEach((child) => {
                  console.log(JSON.stringify(child))
                  
                  items.push({
                    item: child,
                    _key: child.key
                  });
                  
                });
                console.log(JSON.stringify(items))
                this.setState({data: items})
              })
            }>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
      
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
