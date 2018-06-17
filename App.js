/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import GlobalFont from 'react-native-global-font'


const styles = StyleSheet.create({

  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  image: {
    width: 250,
    height: 250,
  },

  buttonCircle: {
    width: 36,
    height: 36,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#FF4F19',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 24,
    color: '#FF4F19',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  }
});


const slides = [
  {
    key: 'somethun',
    title: 'Welcome to Barbing Queue',
    text: 'Simple, powerful, Easy to Use.\nDon\'t waste your time anymore.',
    image: require('./assets/images/welcome.png'),
    imageStyle: styles.image,
    backgroundColor: '#ffffff',
    textStyle: styles.text,
    titleStyle: styles.title,
  },
  {
    key: 'somethun-dos',
    title: 'Automate waiting list',
    text: 'Get alerted when a customer joins the queue. \nAs a customer, get alerted when your turn is reached.',
    image: require('./assets/images/settings.png'),
    imageStyle: styles.image,
    backgroundColor: '#ffffff',
    textStyle: styles.text,
    titleStyle: styles.title,
  },
  {
    key: 'somethun1',
    title: 'Manage your customer care',
    text: 'Get insight on your customer service\nfrom the reports.',
    image: require('./assets/images/diagram.png'),
    imageStyle: styles.image,
    backgroundColor: '#ffffff',
    textStyle: styles.text,
    titleStyle: styles.title,
  }
];


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  _onDone = () => {
    // User finished the introduction. Show "real" app
    this.setState({
      show: true
    })
  }

  _onSkip = () => {
    this.setState({
      show: true
    })
  }

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
      <Icon
        name="ios-checkmark-circle-outline"
        color="#FF4F19"
        size={36}
        style={{ backgroundColor: 'transparent' }}
      />
    </View>
    );
  }

  _renderNextButton =() => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="ios-arrow-dropright-outline"
          color="#FF4F19"
          size={36}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }

  _renderPrevButton =() => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="ios-arrow-dropleft-outline"
          color="#FF4F19"
          size={36}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }

  _renderSkipButton = () => {
    return (
      <Text style={styles.text}>
        skip
      </Text>
    );
  }

  componentDidMount() {
  	// do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    let fontName = 'museosans'
    GlobalFont.applyGlobal(fontName)
  }

  render() {
    return (
      <Container>
      <AppIntroSlider
      slides={slides}
      onDone={this._onDone}
      onSkip={this._onSkip}
      showSkipButton={true}
      renderDoneButton={this._renderDoneButton}
      renderNextButton={this._renderNextButton}
      renderPrevButton={this._renderPrevButton}
      renderSkipButton={this._renderSkipButton}
      dotColor={'#ddd'}
      activeDotColor={'#FF4F19'}

      />
      {
        this.state.show &&
        <Text>
          This Welcome to the Barbing Queue App
        </Text>
      }
      </Container>
    );
  }
}
