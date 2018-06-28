/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TouchableHighlight, Platform, StyleSheet, Text, View, BackHandler, Dimensions, Image, ImageBackground } from 'react-native';
import { Container, Button, Header, Content, Form, Item,
          Input, Label, Icon, Body, Title, Left, Right, Subtitle, Drawer,
          Footer, FooterTab, Card, CardItem
        } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SideBar from './SideBar';

type Props = {};

export default class PaymentPage extends React.Component {

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

  handlePayCash = () => {
    this.props.navigation.push('thank')
  }

  render() {
    return (
      <Container style={styles.container}>
      <Content style={{paddingTop: 20, backgroundColor: '#CF87A4'}}>
      <Text style={{textAlign: 'center', marginBottom: 30, marginTop: 50, fontSize: 18, fontWeight: '300', color: '#FFF'}}>
      How would you like to pay for it?
      </Text>
      <Icon ios='ios-card' android="ios-card" style={{fontSize: 50, color: "#fff",
      marginRight: Platform.OS === 'ios' ? 100 : 100, marginLeft: Platform.OS === 'ios' ? 170 : 180 }}  />
      </Content>
      <Content style={{paddingTop: 20, backgroundColor: '#41021B'}}>
      <View>
      <Text style={{textAlign: 'center', marginTop: 50, fontSize: 30, fontWeight: '900', color: '#FFF'}} onPress={this.handlePayCash}>
      CASH
      </Text>
      <Text style={{textAlign: 'center', marginTop: 30, fontSize: 16, fontWeight: '300',  color: '#FFF'}}>
      You would pay directly in the barber's shop.
      </Text>
      <Text style={{textAlign: 'center', marginTop: 10, fontSize: 16, fontWeight: '300',  color: '#FFF'}}>
      Giving payments directly to the barber.
      </Text>
      </View>
      </Content>
      <Content style={{paddingTop: 20, backgroundColor: '#01041F'}}>
      <Text style={{textAlign: 'center', marginTop: 50, fontSize: 30, fontWeight: '900', color: '#FFF'}}>
      IN-APP
      </Text>
      <Text style={{textAlign: 'center', marginTop: 10, fontSize: 16,  lineHeight: 30, fontWeight: '300',  color: '#FFF'}}>
      Not Available at the moment
      </Text>
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
    backgroundColor: '#41021B'
  },
  content: {
    paddingTop: 20,
    backgroundColor: '#fff',
  }
})
