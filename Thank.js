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

export default class Thank extends React.Component {

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

  handleSwitchMain = () => {
    this.props.navigation.push('Main')
  }

  render() {
    return (
      <Container style={styles.container}>
      <Content style={{ paddingTop: 40, height: 100 }}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '900', color: '#fff'}}> 13:00</Text>
        <Text style={{textAlign: 'center',  fontSize: 25, fontWeight: '900', color: '#fff'}}>June 29</Text>

        <Content style={styles.content}>
        <Text style={{textAlign: 'center', top: 50, fontSize: 30, fontWeight: '900'}}>Thank you</Text>
        <Text style={{textAlign: 'center', fontSize: 18,  marginTop: 80}}>James Smith</Text>
        <Text style={{textAlign: 'center', fontSize: 18,  marginTop: 40, fontWeight: '900'}}>&#163;12.00</Text>
        <Text style={{textAlign: 'center', fontSize: 18,  marginTop: 40, fontWeight: '900'}}>Richmond Barber Shop</Text>
        <Text style={{textAlign: 'center', fontSize: 18,  marginTop: 40}}>1 Grafon Street, BN2 1AQ</Text>
        <Content style={{marginTop: 80}}>
        <Icon ios='ios-checkmark-circle' android="ios-checkmark-circle" style={{fontSize: 70, color: "green",
        marginRight: Platform.OS === 'ios' ? 100 : 100, marginLeft: Platform.OS === 'ios' ? 170 : 180 }} onPress={this.handleSwitchMain} />
        </Content>
      </Content>
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
    marginTop: 20,
    backgroundColor: '#fff',
    height: Dimensions.get('window').height
  }
})
