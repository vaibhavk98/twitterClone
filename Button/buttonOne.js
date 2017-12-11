
import React, { Component } from 'react';
import { Item, Header, Button, TouchableOpacity } from 'native-base';
export default class ButtonExample extends Component {
render() 
         {
         return(
            <Header>
            <Button light>
                <TouchableOpacity>onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="menu" />
                </TouchableOpacity>
              </Button>
              </Header>
         );
    }
}
