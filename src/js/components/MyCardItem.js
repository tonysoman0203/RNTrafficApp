import React from 'react'
import { Component } from 'react'
import { Platform,StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';

class MyCardItem extends Component {
    constructor(props){
        super(props)
    }

    render(){
      return(
        <Card style={{flex:1}}>
            <CardItem>
              <Body>
                <Text>
                   Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: this.props.imageURL}} />
                <Body>
                  <Text>{this.props.region}</Text>
                  <Text note>{this.props.description}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: this.props.imageURL}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
      )
    }
}

export default MyCardItem