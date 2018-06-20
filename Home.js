/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TouchableHighlight, Platform, StyleSheet, Text, View, BackHandler, Dimensions, Image } from 'react-native';
import { Container, Button, Header, Content, Form, Item,
          Input, Label, Icon, Body, Title, Left, Right, Subtitle, Drawer } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SideBar from './SideBar';

'./assets/images/splash_screen.psd'
type Props = {};

export default class Home extends React.Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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

  closeDrawer(){
    this._drawer._root.close()
  };
  openDrawer(){
    this._drawer._root.open()
  };



  render() {
    return (
      <Drawer
      ref={(ref) => { this._drawer = ref; }}
      content={<SideBar navigator={this._navigator} />}
      onClose={()=> this.closeDrawer()}
      openDrawerOffset={0.3}
      >

      <Container style={styles.container}>
      <Header style={{backgroundColor: '#41021B'}} androidStatusBarColor="#41021B" iosBarStyle="light-content">
      <Left style={{flex: 1}}>
        <Button transparent onPress={()=> this.openDrawer()}>
          <Icon ios="ios-menu-outline" android="md-menu" style={{fontSize: 30, color: '#FFF'}}  />
        </Button>
      </Left>
        <Body style={{ flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <Title style={{color: '#fff'}}>Home</Title>
          <Subtitle style={{color: '#fff'}}>Barbing Queue App</Subtitle>
        </Body>
        <Right style={{flex: 1}}>
        <Button transparent>
          <Icon ios="ios-add-outline" android="md-add" style={{fontSize: 30, color: '#FFF'}}  />
        </Button>
        <Button transparent>
        <Icon ios="ios-search-outline" android="md-search" style={{fontSize: 30, color: '#FFF'}}  />
      </Button>
      </Right>
      </Header>
      <Content>

      </Content>
      </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
  }
})
