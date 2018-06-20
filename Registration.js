/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, BackHandler, Dimensions, Image, ImageBackground, StatusBar } from 'react-native';
import { Container, Button, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



type Props = {};

export default class Registration extends React.Component {

  static navigationOptions = {
    header: null,
   headerLeft: null,
   gesturesEnabled: false,
  };

  constructor(props) {
    super(props);

  }

  _handleSignUp = ()=> {
    this.props.navigation.push('Sign')
  }

  _handleForgotPassword =()=> {
    this.props.navigation.push('ForgotPassword')
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick = () => {
      this.props.navigation.navigate("SignUp");
      return true;
  };

  handleSignUpClick = () => {
    this.props.navigation.push("SignUp");
  }

  handleSignInClick = () => {
    this.props.navigation.push("Sign");
  }

  render() {
    return (
      <ImageBackground source={require('./assets/images/image_background.png')}
      style={styles.backgroundImage}>
      <StatusBar
      backgroundColor="#01041F"
      barStyle="light-content"
      />
      <Container>
      <Content style={{top: 100}}>

      <Content style={{ flexDirection: 'row',  left: (Dimensions.get('window').width / 4) - 10}}>
        <Image source={require('./assets/images/logo.png')}   style={{  flex: 1,
          aspectRatio: 1, resizeMode: 'contain', width: 200, height: 200 }} />
      </Content>

        <Form style={{ left: (Dimensions.get('window').width / 5) - 25, marginTop: 100, marginLeft: 15, marginRight: 15 }}>
        <Button rounded style={{padding: 20, width: 250, justifyContent: 'center', backgroundColor: '#CF87A4'}} onPress={this.handleSignInClick}>
         <Text  style={{textAlign: 'center',  color: '#ffffff' }}>Login</Text>
        </Button>
        <Button rounded transparent style={{ padding: 20, width: 250, marginTop: 15, justifyContent: 'center', borderColor: '#CF87A4', borderWidth: 2}}  onPress={this.handleSignUpClick}>
        <Text  style={{textAlign: 'center',  color: '#ffffff' }}>Sign Up</Text>
       </Button>
        </Form>
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

buttonCircle: {
  width: 80,
  height: 80,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
  container:{
    backgroundColor: '#fff',
  }
})
