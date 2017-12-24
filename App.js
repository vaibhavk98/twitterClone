
import React, { Component } from 'react';

import { Stylesheet, Image } from 'react-native';

import { Container, Header, Title, Button, Left,  Tab, Tabs, TabHeading, Icon } from 'native-base';

import Tab1 from './Tabs/HomeTabs/tabOne';

import Tab2 from './Tabs/HomeTabs/tabTwo';

import Drawer from './Navigate/Drawer';

import Button from './Tabs/HomeTabs/Button/buttonOne';

export default class AdvancedTabsExample extends Component {
  
  render() {

    return (
      
    <Container> 
      <Header hasTabs>
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
      </Header>
    </Container>
    );
  }
}
