/* @flow */

import React from 'react'
import { Component } from 'react'
import { View,Platform,StyleSheet, FlatList} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Spinner, Right, Body, Icon, Text, Tab, Tabs } from 'native-base';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import action, { getDataByRegion } from '../actions'
import MyCardItem from './MyCardItem'
import * as Actions from '../constants/action-types'
import * as Models from '../constants/models'
import moment from 'moment'
import { itemsRef } from '../index'
import store from "../store/index";

type Props = {}

const mapStateToProps = state => {
    return { state };
};
  
const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({ action });
    return { ...actions, dispatch, callService: (region)=>dispatch(getDataByRegion(region)) };
}

class Tab2 extends Component<Props>{
    
    constructor(props){
        super(props);
        this.state = {
            data :  [],
        }
        
    }
    
    componentDidMount(){
        // this.props.callService("Kowloon");
    }

    componentDidUpdate(nextProps, nextState){
        console.log(`Tab2 componentWillUpdate: nextState = ${JSON.stringify(nextState)}`);
    }

    componentWillReceiveProps(nextProps){
        console.log(`componentWillReceiveProps Tab1 props = ${JSON.stringify(nextProps)}`);
        if(nextProps != this.props){
            this.setState({
                data: nextProps.state.DataReducers.items
            })
        }
        
    }

    renderFlatList(){
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={item=>item.key}
                renderItem={({item}) => this.renderRow(item)}
            />
        )    
    }
    
      renderRow(item){
          return(
            <View style={{flex:1, justifyContent: 'center'}}>
              <MyCardItem
                item={item}
                key={item.key}
              />
            </View>
          )
      }
    
      
    async onRefreshButtonClick(region){
        this.props.callService(region)
    }

    render(){
        return(
            <Container>
                <Content>
                    {this.renderFlatList()}
                </Content>    
                <Footer>
                    <FooterTab>
                    <Button full onPress={()=>{
                        this.onRefreshButtonClick('Kowloon')
                    }}>
                        <Text>Refresh</Text>
                    </Button>
                    </FooterTab>
                 </Footer>
            </Container>    
        )
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(Tab2);