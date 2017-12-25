
import React, { Component } from 'react';

import { Stylesheet, Image } from 'react-native';

import { Container, Header, View, Title, Button, Left,  Tab, Tabs, TabHeading, Icon } from 'native-base';


import Tab1 from './HomeTabs/tabOne';

import Tab2 from './HomeTabs/tabTwo';


import ButtonOne from './HomeTabs/Button/buttonOne';

export default class AdvancedTabsExample extends Component {
  
  render() {

    return (
      
    <Container> 
      <Header hasTabs />
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
          <Tab1/>        
          </Tab>
          <Tab heading={ <TabHeading><Icon name="search" /></TabHeading>}>
          <Tab2/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="notifications" /></TabHeading>}>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="mail" /></TabHeading>}>
          </Tab>
        </Tabs>
    </Container>
    );
  }
}
