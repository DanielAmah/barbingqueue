/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TouchableHighlight, Platform, StyleSheet, Text,
  View, BackHandler, Dimensions, Image, ScrollView, Animated,
  TouchableOpacity, ImageBackground } from 'react-native';
import { Container, Button, Header, Content, Form, Item,
          Input, Label, Icon, Body, Title, Left, Right, Subtitle, Drawer,
          Footer, FooterTab, Thumbnail, List, ListItem
        } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SideBar from './SideBar';
import StarRating from 'react-native-star-rating';


type Props = {};

export default class Profile extends React.Component {

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);
    this.state= {
      starCount: 5
    }

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
      <Header style={{backgroundColor: '#CF87A4'}} androidStatusBarColor="#CF87A4" iosBarStyle="light-content">
      <Body style={{ flex: 1, alignItems:'center'}}>
        <Title style={{color: '#fff'}}>Profile</Title>
      </Body>
    </Header>
      <View>
      <ImageBackground source={require('./assets/images/barberWall.jpg')}
      style={styles.backgroundImage}>
      <View style={{height: 120, paddingTop: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 16}}>Welcome Daniel, </Text>
      </View>
      </ImageBackground>
        <View style={{ height: 100, width: 100, position: 'absolute', marginTop: 60,  left:  (Dimensions.get('window').width / 3) + 10}}>
        <Thumbnail large source={require('./assets/images/barber1.jpg')} style={{borderWidth: 3, borderColor: '#fff'}} />
        </View>
      </View>
      <Content style={{marginTop: 60}}>
        <List>
        <ListItem>

          <Text onPress={this.props.onChangeProfile}>MY QUEUE</Text>


        </ListItem>
        <ListItem>
        <Text>TERMS OF SERVICE</Text>
        </ListItem>
        <ListItem>
        <Text>HELP CENTRE</Text>
      </ListItem>
      <ListItem>
      <Text onPress={this.props.onSignOut}>SIGN OUT</Text>
    </ListItem>
      </List>
      </Content>

    </Container>
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage: {
    width: null,
    height: null
  },
  container:{
    backgroundColor: '#fff',
  },

  buttonCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#FFF",
    left: 5,
    backgroundColor: "#CF87A4",
    left: (Dimensions.get('window').width / 3) + 10,
    marginTop: 15,
  },
})
