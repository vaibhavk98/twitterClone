
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,List,ListItem} from 'native-base';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
export default class SideBar extends Component {
        constructor(props) {    
           super(props);   
            this.state = {    
                shadowOffsetWidth: 0.4,    
                shadowRadius: 2,    
            };   
        }
        render(){
            let folowers= ` 22 `;
            let folowing= ` 46 `;
            return(
                <Container style={{marginTop:25}}>
                    <Content>
                  <Text style={{fontSize:20,fontWeight:"550",marginLeft:20}}>
                    VK
                   </Text>
                   <Text style={{fontSize:16,color:"gray",marginBottom:5,marginLeft:25}}>
                    @VKCool
                     </Text> 
                     <Text style={{marginLeft:20}}> 
                     <Text style={{fontWeight: 'bold',}}>
                     {folowers}
                    </Text>
                    <Text style={{fontSize:14,color:"gray"}}>
                    Followers
                    </Text>
                    <Text style={{fontWeight: 'bold'}}>
                    {folowing }
                    </Text>
                    <Text style={{fontSize:14,color:"gray"}}>
                    Following
                    </Text>    
                    </Text>
                    <List style={{borderTopWidth:0.7,marginTop:15,borderTopColor:"gray"}}>
                                <ListItem icon button noBorder style={{marginBottom:8}}>
                                <Left>
                                <Icon name="ios-person" style={styles.isize}/>
                                </Left>
                                <Body>
                                <Text style={styles.ifsize}>Profile</Text>
                                </Body>
                                </ListItem>
                                <ListItem icon button noBorder style={{marginBottom:8}}>
                                <Left>
                                <Icon name="md-list-box" style={styles.isize}/>
                                </Left>
                                <Body>
                                <Text style={styles.ifsize}>Lists</Text>
                                </Body>
                                </ListItem>
                                <ListItem icon button noBorder style={{marginBottom:8}}>
                                <Left>
                                <Icon name="ios-thunderstorm-outline" style={styles.isize}/>
                                </Left>
                                <Body>
                                <Text style={styles.ifsize}>Moments</Text>
                                </Body >
                                </ListItem>
                                <ListItem icon button noBorder style={{marginBottom:8}}>
                                <Left>
                                <Icon name="md-copy" style={styles.isize}/>
                                </Left>
                                <Body>
                                <Text style={styles.ifsize}>Highlights</Text>
                                </Body>
                                </ListItem>
                                </List>
                                <List>
                                <ListItem button noBorder>
                                <Text style={{fontSize:20}}>Settings and Privacy</Text>
                                </ListItem>
                                <ListItem button noBorder>
                                <Text style={{fontSize:20}}>Help Center</Text>
                                </ListItem>
                                </List>
                                </Content>
                                <Footer>
                                <FooterTab style={styles.footer}>
                                <Left>
                                <Button transparent>
                                <Icon name='md-moon' style={styles.ficon}/>
                                </Button>
                                </Left>
                                <Right>
                                <Button transparent>
                                <Icon name='md-barcode' style={styles.ficon}/>
                                </Button>
                                </Right>
                                </FooterTab>
                                </Footer>   
                                </Container>
                  );
                 }
            }

const styles= StyleSheet.create(
    {
    footer:{
      backgroundColor:"white",
      borderColor:"gray",
      borderTopWidth:0.4, 
    },
    ficon:{
      color:"#2196F3",
    },
    isize:{
        fontSize:30,
        width:37,
    },
    ifsize:{
        fontSize:20, 
    }
    } 
);
