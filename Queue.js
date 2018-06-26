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

export default class Queue extends React.Component {

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
      <ImageBackground source={require('./assets/images/home_background.png')}
      style={styles.backgroundImage}>
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '900'}}> Richmond Barber Shop </Text>
          <Text style={{textAlign: 'center',  fontSize: 25, fontWeight: '900', top: 10, color: '#41021B'}}>John Smith </Text>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '900', top: 10}}>Now serving: 10</Text>
          <Content style={{marginLeft: 60, marginRight: 50, top: 30}}>
          <Grid>
          <Col>
            <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#41021B"}}  />
          </Col>
          <Col>
            <Icon ios='ios-more' android="ios-more" style={{fontSize: 25, color: "#000"}}  />
          </Col>
          <Col>
            <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
          </Col>
          <Col>
            <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
          </Col>
          <Col>
            <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
          </Col>
          <Col>
            <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
          </Col>
          <Col>
            <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
          </Col>
          <Col>
          <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
        </Col>
        <Col>
          <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
        </Col>
        <Col>
          <Icon ios='ios-person' android="ios-person" style={{fontSize: 25, color: "#000"}}  />
        </Col>
          </Grid>
          </Content>
          <Text style={{textAlign: 'center', top: 50, fontSize: 20, fontWeight: '900'}}>Queue Number</Text>
          <Text style={{textAlign: 'center', fontSize: 72, fontWeight: '900',  top: 40}}>03</Text>
          <Content style={{top: 80}}>
            <Grid>
            <Col>
              <Row style={{marginLeft: 60, marginRight: 50}}>
            <View style={{flexDirection: 'row', flex: 1}}>
            <Icon ios='ios-people' android="ios-people" style={{fontSize: 25, color: "#000"}}  />
            <Text style={{top: 5, left: 10}}> 10 </Text>
            </View>
              </Row>
              <Row style={{marginLeft: 30}}>
                <Text style={{fontWeight: '900'}}>
                People in waiting
                </Text>
              </Row>
            </Col>
            <Col>
            <Row style={{marginLeft: 40, marginRight: 50}}>
          <View style={{flexDirection: 'row', flex: 1}}>
          <Icon ios='ios-time-outline' android="ios-time-outline" style={{fontSize: 25, color: "#000"}}  />
          <Text style={{top: 5, left: 10}}> 15 mins </Text>
          </View>
            </Row>
            <Row style={{marginLeft: 30}}>
              <Text style={{fontWeight: '900'}}>
              Approx. wait time
              </Text>
            </Row>
          </Col>
            </Grid>
          </Content>
          <Content style={{marginTop: 120}}>
          <Grid>
          <Col style={{marginLeft: 30}}>
          <Button rounded style={{padding: 20, width: 120, justifyContent: 'center', backgroundColor: '#01041F'}} onPress={this.handleSignLoginClick}>
          <Text style={{textAlign: 'center',  color: '#ffffff' }}>Postpone</Text>
          </Button>
          </Col>
          <Col style={{marginLeft: 20}}>
          <Button rounded style={{padding: 20, width: 120, justifyContent: 'center', backgroundColor: '#41021B'}} onPress={this.handleSignLoginClick}>
          <Text style={{textAlign: 'center',  color: '#ffffff' }}>Cancel</Text>
          </Button>
          </Col>
          </Grid>
          </Content>
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
  container:{
    paddingTop: 50,
    paddingBottom: 100
  },
  content: {
    shadowColor: '#ddd',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 3,
    left: 10,
    height: 300,
    marginRight: 20,
    height: 100,
    borderWidth: 0,
    borderColor: '#ddd',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    zIndex:999,
    borderWidth: 1,
    paddingTop: 20
  }
})
