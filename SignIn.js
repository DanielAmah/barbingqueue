/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, BackHandler, Dimensions, Image, ImageBackground, StatusBar } from 'react-native';
import { Container, Button, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
// import Icon from 'react-native-vector-icons/Ionicons';


type Props = {};

export default class SignIn extends React.Component {

  static navigationOptions = {
    header: null,
   headerLeft: null,
   gesturesEnabled: false,
  };

  constructor(props) {
    super(props);

  }

  _handleSignUp = ()=> {
    this.props.navigation.push('SignUp')
  }

  handleSignLoginClick = () => {
    this.props.navigation.push('Main')
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

  render() {
    return (
      <ImageBackground source={require('./assets/images/app_background.png')}
      style={styles.backgroundImage}>
      <StatusBar
      backgroundColor="#01041F"
      barStyle="light-content"
      />
      <Container style={{backgroundColor: "#01041F" }}>
      <Content>

      <Content style={{ flexDirection: 'row',  left: (Dimensions.get('window').width / 4) - 10,  marginTop: 60,}}>
        <Image source={require('./assets/images/logo.png')}   style={{  flex: 1,
          aspectRatio: 1, resizeMode: 'contain', width: 200, height: 200 }} />
      </Content>

        <Form style={{ marginTop: 50, marginLeft: 15, marginRight: 15 }}>
          <Item rounded style={{borderColor: "#CF87A4"}}>
          <Icon ios='ios-person-outline' android="ios-person" style={{fontSize: 20, color: "#CF87A4"}}  />
          <Input placeholder='User Name' placeholderTextColor="#CF87A4" />
          </Item>
          <Item rounded style={{marginTop: 20, borderColor: "#CF87A4"}}>
            <Icon ios='ios-lock-outline' android="ios-lock" style={{fontSize: 20, color: "#CF87A4"}}  />
            <Input secureTextEntry={true} placeholder='Password' placeholderTextColor="#CF87A4" />
          </Item>
          <Content style={{ flex: 1,  left: (Dimensions.get('window').width / 5) - 25,  marginTop: 30,}}>
            <Button rounded style={{padding: 20, width: 250, justifyContent: 'center', backgroundColor: '#CF87A4'}} onPress={this.handleSignLoginClick}>
            <Text style={{textAlign: 'center',  color: '#ffffff' }}>Login</Text>
            </Button>
          </Content>
          <Content style={{ flex: 1,  left: (Dimensions.get('window').width / 4) - 25,  marginTop: 50}}>
            <Text style={{color: "#CF87A4", fontSize: 18}} onPress={this._handleForgotPassword}> Forget your password ? </Text>
          </Content>
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
