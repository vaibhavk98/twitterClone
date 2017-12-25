
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.ytimg.com/vi/Fsevs_fTfM8/mqdefault.jpg'}} />
                <Body>
                  <Text>Vk</Text>
                  <Text note>@VKcool</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://s1.1zoom.net/big3/404/413709-svetik.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text> 123 </Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <Icon active name="heart" />
                <Text> 40 </Text>
                </Button>
                </Body>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text> 56 </Text>
                </Button>
                </Body>
                <Body>
                <Button transparent>
                <Icon active name="mail" />
                <Text> 22 </Text>
                </Button>
              </Body>
              <Right>
                <Text>1h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}