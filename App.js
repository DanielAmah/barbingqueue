/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Platform, StyleSheet, Text, View } from 'react-native';
import GlobalFont from 'react-native-global-font'
import { createStackNavigator } from 'react-navigation';
import IntroSlider from './IntroSlider';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './forgotPassword';
import Home from './Home';
import Registration from './Registration';
import SearchPage from './searchPage';
import Map from './map';

type Props = {};

const RootStack = createStackNavigator({
  Home: IntroSlider,
  Sign: SignIn,
  SignUp: SignUp,
  ForgotPassword: ForgotPassword,
  Main: Home,
  Registration: Registration,
  search: SearchPage,
  map: Map
  },
  {
    initialRouteName: 'search'
  }
);

export default class App extends Component<Props> {

  componentDidMount() {
  	// do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    let fontName = 'museosans'
    GlobalFont.applyGlobal(fontName)
  }

  render() {
    <View>
      <IntroSlider navigation={this.props.navigation}/>
      <SignUp navigation={this.props.navigation}/>
      <SignIn navigation={this.props.navigation}/>
      <ForgotPassword navigation={this.props.navigation}/>
      <Home navigation={this.props.navigation}/>
    </View>
    return (
      <RootStack />
    );
  }
}
