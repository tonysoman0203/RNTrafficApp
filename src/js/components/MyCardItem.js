import React from 'react'
import { Component } from 'react'
import { Platform,StyleSheet, Image, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Textarea } from 'native-base';
export default class MyCardItem extends Component {
    constructor(props){
        super(props)
        console.log(`this.props.MyCardItem = ${JSON.stringify(props.item) }`);
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
                   {jsonParse.image.region}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: jsonParse.image.url}} />
                <Body>
                  <Text>{jsonParse.image.region}</Text>
                  <Text note>{jsonParse.image.description}</Text>
                </Body>
              </Left>
              <Right>
                <Text note>updated at : {jsonParse.updatedAt}</Text>
              </Right>  
            </CardItem>
            <CardItem cardBody>
              <Image key={jsonParse.image.url.concat(`?updatedAt=${jsonParse.updatedAt}`)}
              source={{uri: jsonParse.image.url, 
              cache: 'reload', 
              headers: {Pragma: 'no-cache' } }} 
              style={{height: 200, width: 0, flex: 1}}  />
            </CardItem>
          </Card>
      </View>    
      )
    }

    render(){
      return this.renderCard(JSON.stringify(this.props.item))
    }
}
