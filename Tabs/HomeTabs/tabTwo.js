
import React, { Component } from 'react';

import {Container, Header, Item, Icon, Input, Button, Text} from 'native-base';

 export default class SearchBar extends Component {

   render() {

return (
  
<Container>
  
  <Header searchBar rounded>

    <Item>

      <Icon name="ios-search" />

      <Input placeholder="Search Twitter" />

      <Icon name="ios-people" />

    </Item>

    <Button transparent>

      <Text>Search Twitter</Text>

    </Button>

    <Header>

    <Button iconLeft light>

    <Icon name='arrow-back'/>

    <Text>Back</Text>

    </Button>

    </Header>

  </Header>

</Container>


   );}
    
}