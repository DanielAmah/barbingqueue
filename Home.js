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
import Profile from './Profile';
import Queue from './Queue';
import Search from './Search'
import HomeScreen from './HomeScreen';

type Props = {};


export default class Home extends React.Component {

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {index: 0} // default screen index
  }

  switchScreen(index) {
    this.setState({index: index})
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

  handleSearch = () => {
    this.props.navigation.navigate("SearchPage");
  }

  handleQueueCancel = () => {
    this.props.navigation.push('Main')
  }

  handleSignOut = () => {
    this.props.navigation.push('Registration')
  }

  handleQueue = () => {
    this.props.navigation.push('queue')
  }

  render() {
    let AppComponent = null;
    if (this.state.index == 0) {
      AppComponent = HomeScreen
   } else if(this.state.index == 1) {
      AppComponent = Search
   }else if(this.state.index == 2) {
    AppComponent = Queue
   }else {
    AppComponent = Profile
   }


    return (
      <Container>

      <Content scrollEnabled={false}>
      <AppComponent
      onPress={this.handleSearch}
      onCancel={this.handleQueueCancel}
      onSignOut={this.handleSignOut}
      onChangeProfile={this.handleQueue}
      />
      </Content>

      <Footer style={{backgroundColor: '#FFFFFF'}}>
          <FooterTab style={{backgroundColor: '#FFFFFF'}}>
            <Button vertical active={this.state.index == 0}
            onPress={() => this.switchScreen(0)}>
              <Icon name="home" style={styles.icon} />
            </Button>
            <Button vertical active={this.state.index == 1}
            onPress={() => this.switchScreen(1)}>
              <Icon name="search" style={styles.icon} />
            </Button>
            <Button vertical active={this.state.index == 2}
            onPress={() => this.switchScreen(2)}>
              <Icon active name="time" style={styles.icon} />
            </Button>
            <Button vertical active={this.state.index == 3}
            onPress={() => this.switchScreen(3)}>
              <Icon name="contact" style={styles.icon} />
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#01041F',
  },
  icon: {
    fontSize: 30
  }
})
