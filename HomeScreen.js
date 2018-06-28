/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TouchableHighlight, Platform, StyleSheet, Text, View,
  BackHandler, Dimensions, Image, ImageBackground } from 'react-native';
import { Container, Button, Header, Content, Form, Item,
          Input, Label, Icon, Body, Title, Left, Right, Subtitle, Drawer,
          Footer, FooterTab,
        } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

type Props = {};

export default class Home extends React.Component {

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);

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
      <ImageBackground source={require('./assets/images/home_background.png')}
      style={styles.backgroundImage}>
      <Container>
        <Content showsVerticalScrollIndicator={false} style={{ flexDirection: 'row',  top: (Dimensions.get('window').height / 5) - 10}}>
          <Text style={{color: '#CF87A4', fontSize: 36, fontWeight: '900', left: (Dimensions.get('window').width / 4) + 10}}> SEARCH </Text>
          <Text style={{color: '#fff', fontSize: 20, left: (Dimensions.get('window').width / 4) + 10}}> for barbers nearby </Text>
          <View style={{marginTop: 80, height: 1, backgroundColor: '#CF87A4', width: (Dimensions.get('window').width), top: 20 }}></View>
        </Content>
        <Content style={{ top: (Dimensions.get('window').height / 7) - 10}}>
        <Text style={{color: '#CF87A4', fontSize: 36, fontWeight: '900', left: (Dimensions.get('window').width / 3) + 10}}> JOIN </Text>
        <Text style={{color: '#fff', fontSize: 20, left: (Dimensions.get('window').width / 6) + 10}}> a queue and wait for your turn </Text>
      </Content>
      </Container>
      </ImageBackground>
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
  }
})
