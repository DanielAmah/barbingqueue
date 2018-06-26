/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TouchableHighlight, Platform, StyleSheet, Text,
  View, BackHandler, Dimensions, Image, ScrollView, Animated,
  TouchableOpacity, ImageBackground } from 'react-native';
import { Container, Button, Header, Content, Form, Item,
          Input, Label, Icon, Body, Title, Left, Right, Subtitle, Drawer,
          Footer, FooterTab, Thumbnail, List, ListItem
        } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SideBar from './SideBar';


type Props = {};

export default class SearchPage extends React.Component {

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);
    this.state= {
      value: ''
    }

  }

  _handleSignIn = ()=> {
    this.props.navigation.push('Sign')
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick = () => {
      this.props.navigation.navigate("ForgotPassword");
      return true;
  };

  render() {
    return (
      <Container>
      <Header />
      <Content>
        <List>
          <ListItem avatar>
            <Left>
            <Thumbnail source={require('./assets/images/barber2.jpg')} />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3053.9 miles</Text>
            </Right>
          </ListItem>
        </List>
        <List>
          <ListItem avatar>
            <Left>
            <Thumbnail source={require('./assets/images/barber2.jpg')} />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3053.9 miles</Text>
            </Right>
          </ListItem>
        </List>
        <List>
          <ListItem avatar>
            <Left>
            <Thumbnail source={require('./assets/images/barber2.jpg')} />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3053.9 miles</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  container:{
    backgroundColor: '#fff',
  },

  buttonCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#FFF",
    left: 5,
    backgroundColor: "#CF87A4",
    left: (Dimensions.get('window').width / 3) + 10,
    marginTop: 15,
  },
})
