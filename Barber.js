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

export default class Barber extends React.Component {

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

  handleQueue = ()=> {
    this.props.navigation.push('joinQueue')
  }

  render() {
    return (
      <Container style={styles.container}>
      <Header style={{backgroundColor: '#CF87A4'}} androidStatusBarColor="#CF87A4" iosBarStyle="light-content">
      <Body style={{ flex: 1, alignItems:'center'}}>
        <Title style={{color: '#fff'}}>Barber</Title>
      </Body>
    </Header>
      <View>
      <ImageBackground source={require('./assets/images/barberWall.jpg')}
      style={styles.backgroundImage}>
      <View style={{height: 120, paddingTop: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 16}}>Richmond Barber Shop</Text>
        <Text  style={{textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 14}}>1 Grafon Street, BN2 1AQ</Text>
      </View>
      </ImageBackground>
        <View style={{ height: 100, width: 100, position: 'absolute', marginTop: 60,  left:  (Dimensions.get('window').width / 3) + 10}}>
        <Thumbnail large source={require('./assets/images/barber2.jpg')} />
        </View>
      </View>
      <Content>
      <StarRating
      disabled={false}
      emptyStar={'ios-star-outline'}
      fullStar={'ios-star'}
      halfStar={'ios-star-half'}
      iconSet={'Ionicons'}
      maxStars={5}
      rating={5}
      fullStarColor={'orange'}
      starSize={20}
      containerStyle={{marginRight: Platform.OS === 'ios' ? 120 : 150, marginLeft: Platform.OS === 'ios' ? 100 : 100, marginTop: 30}}
      />
      <Text style={{marginRight: Platform.OS === 'ios' ? 100 : 100, marginLeft: Platform.OS === 'ios' ? 130 : 140, fontWeight: 'bold' }}>James Smith</Text>
      <Grid style={{height: 200, marginTop: 20 }}>
      <Col>
      <Image source={require('./assets/images/hair1.jpg')}   style={{  flex: 1,
        aspectRatio: 1, resizeMode: 'contain', width: 200, height: 200 }} />
      </Col>
      <Col>
      <Row>
      <Col>
      <Image source={require('./assets/images/hair2.jpg')}   style={{ flex: 1,
        aspectRatio: 1, resizeMode: 'contain', width: 200, height: 200 }} />
      </Col>
      <Col>
      <Image source={require('./assets/images/hair3.jpg')}   style={{  flex: 1,
        aspectRatio: 1, resizeMode: 'contain', width: 200, height: 200 }} />
      </Col>
      </Row>
      <Row>
      <Col>
      <Image source={require('./assets/images/hair4.jpg')}   style={{  flex: 1,
        aspectRatio: 1, resizeMode: 'contain', width: 200, height: 200 }} />
      </Col>
      <Col>
      <Image source={require('./assets/images/hair5.jpg')}   style={{  flex: 1,
        aspectRatio: 1, resizeMode: 'contain', width: 200, height: 200 }} />
      </Col>
      </Row>
      </Col>
      </Grid>
      <ImageBackground source={require('./assets/images/map.png')}
      style={styles.backgroundImage}>
      <View style={{height: 60, paddingTop: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
      <Icon ios='ios-pin-outline' android="ios-pin-outline" style={{fontSize: 30, color: "#FFF",
        marginRight: Platform.OS === 'ios' ? 100 : 100, marginLeft: Platform.OS === 'ios' ? 170 : 180 }}  />
      </View>
      </ImageBackground>
      <List>
        <ListItem>
          <Body>
            <Text>Reviews</Text>
          </Body>
          <Right>
            <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={5}
            fullStarColor={'orange'}
            starSize={20}
            />
          </Right>
        </ListItem>
          </List>
      </Content>
      <Footer style={{backgroundColor: '#fff', borderColor: 'transparent', borderWidth: 0 }}>
      <Button rounded style={{padding: 20, width: 200, justifyContent: 'center', backgroundColor: '#CF87A4'}} onPress={this.handleQueue}>
      <Text style={{textAlign: 'center',  color: '#ffffff', fontSize: 18 }}>Join Queue</Text>
      </Button>
      </Footer>
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
