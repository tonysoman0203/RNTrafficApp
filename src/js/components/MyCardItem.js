import React from 'react'
import { Component } from 'react'
import { Platform,StyleSheet, Image, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Textarea } from 'native-base';
export default class MyCardItem extends Component {
    constructor(props){
        super(props)
        this.state = {
          data: {}
        }
        console.log(`this.props.MyCardItem = ${JSON.stringify(props.image) }`);
      }

    renderCard(json){
      console.log(`renderCard = ${json}`)
      var jsonParse = JSON.parse(json)
      return(
      <View>  
        <Card style={{flex:1}}>
            <CardItem>
              <Body>
                <Text>
                   {jsonParse[`region`]}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: jsonParse.url}} />
                <Body>
                  <Text>{jsonParse.region}</Text>
                  <Text note>{jsonParse.description}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: jsonParse.url}} style={{height: 200, width: 0, flex: 1}}/>
            </CardItem>
          </Card>
      </View>    
      )
    }

    render(){
      return this.renderCard(JSON.stringify(this.props.image))
    }
}
