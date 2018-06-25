/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TouchableHighlight, Platform, StyleSheet, Text, View, BackHandler, Dimensions, Image } from 'react-native';
import { Container, Button, Header, Content, Form, Item,
          Input, Label, Icon, Body, Title, Left, Right, Subtitle, Drawer,
          Footer, FooterTab,
        } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SideBar from './SideBar';

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


      <Container style={styles.container}>
        <Content style={{ top: 50 }}>
          <Text style={{textAlign: 'center'}}> Richmond Barber Shop </Text>
          <Text style={{textAlign: 'center'}}>John Smith </Text>
          <Text style={{textAlign: 'center'}}>Now serving: 10</Text>
        </Content>
        <View style={{
          flex: 1,
          flexDirection:'row',
        }}>
        <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
        <Icon ios='ios-more' android="ios-more" style={{fontSize: 25, color: "#000"}}  />
        <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
        <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
        <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
        <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
        <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
  }
})
