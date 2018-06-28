/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , Alert, ImageBackground, KeyboardAvoidingView, Dimensions, StatusBar} from 'react-native';
import { Container, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import GlobalFont from 'react-native-global-font'
import { NavigationActions } from 'react-navigation';



type Props = {};

export default class IntroSlider extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    console.log(this.props);
  }

  _onDone = () => {
    this.props.navigation.push('Registration')
  }

  _onSkip = () => {
    this.props.navigation.push('Registration')
  }

  _renderDoneButton = () => {
    return (
    <View style={styles.buttonCircle}>
      <Icon
        name="ios-checkmark-circle-outline"
        color="#CF87A4"
        size={40}
        style={{ backgroundColor: 'transparent', fontWeight: 'bold' }}
      />
    </View>
    );
  }

  _renderNextButton =() => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="ios-arrow-dropright-outline"
          color="#CF87A4"
          size={40}
          style={{ backgroundColor: 'transparent', fontWeight: 'bold' }}
        />
      </View>
    );
  }

  _renderPrevButton =() => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="ios-arrow-dropleft-outline"
          color="#CF87A4"
          size={40}
          style={{ backgroundColor: 'transparent', fontWeight: 'bold' }}
        />
      </View>
    );
  }

  _renderSkipButton = () => {
    return (
      <Text style={{fontWeight: 'bold', color: "#CF87A4", fontSize: 16 }}>
        skip
      </Text>
    );
  }

  render() {
    const slides = [
      {
        key: 'somethun',
        title: 'Welcome',
        image: require('./assets/images/locate.png'),
        imageStyle: styles.image,
        text: 'FIND YOUR IDEAL BARBER',
        backgroundColor: 'transparent',
        textStyle: styles.text,
        titleStyle: styles.title,
      },
      {
        key: 'somethun-dos',
        title: 'Welcome',
        image: require('./assets/images/queue.png'),
        imageStyle: styles.image,
        text: 'JOIN A QUEUE.',
        backgroundColor: 'transparent',
        textStyle: styles.text,
        titleStyle: styles.title,
      },
      {
        key: 'somethun1',
        title: 'Welcome',
        image: require('./assets/images/notification.png'),
        imageStyle: styles.image,
        text: 'GET NOTIFIED.',
        backgroundColor: 'transparent',
        textStyle: styles.text,
        titleStyle: styles.title,
      }
    ];
    return (
      <ImageBackground source={require('./assets/images/app_background.png')}
      style={styles.backgroundImage}>
      <StatusBar
      backgroundColor="#01041F"
      barStyle="light-content"
      />
        <Container style={{backgroundColor: '#01041F'}}>
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
            activeDotColor={'#CF87A4'}
          />
          {
            this.state.show &&
            <Text>
              This Welcome to the Barbing Queue App
            </Text>
          }
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
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  image: {
    flex: 1,
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },

  buttonCircle: {
    width: 36,
    height: 36,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#CF87A4',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: 50,
    fontWeight: "900",
    marginBottom: (Dimensions.get('window').height / 5) - 25,
  },

  title: {
    fontSize: 24,
    color: '#CF87A4',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
