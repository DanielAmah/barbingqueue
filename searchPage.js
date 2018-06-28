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

export default class SearchPage extends React.Component {

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

  handleBarber = ()=> {
    this.props.navigation.push('barber')
  }

  render() {
    return (
      <Container style={styles.container}>
      <Header style={{backgroundColor: '#CF87A4'}} androidStatusBarColor="#CF87A4" iosBarStyle="light-content">
      <Body style={{ flex: 1, alignItems:'center'}}>
        <Title style={{color: '#fff'}}>Search</Title>
      </Body>
    </Header>
      <Content>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginBottom: 5, marginTop: 5 }}> 7 barbers found </Text>
        <List>
          <ListItem avatar onPress={this.handleBarber}>
            <Left>
            <Thumbnail source={require('./assets/images/barber2.jpg')} />
            </Left>
            <Body>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.starCount}
                fullStarColor={'orange'}
                starSize={20}
                containerStyle={{marginRight: Platform.OS === 'ios' ? 50 : 80}}
              />
              <Text  style={{fontSize: 13, fontWeight: '900'}}>Audrey Benedict</Text>
              <Text note>1 Grafon Street, BN2 1AQ</Text>
            </Body>
            <Right>
              <Text note  style={{fontSize: 14, fontWeight: '900', top: 5}}>3053.9 miles</Text>
            </Right>
          </ListItem>
        </List>
        <List>
          <ListItem avatar onPress={this.handleBarber}>
            <Left>
            <Thumbnail source={require('./assets/images/barber1.jpg')} />
            </Left>
            <Body>
                <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={4}
                fullStarColor={'orange'}
                starSize={20}
                containerStyle={{marginRight: Platform.OS === 'ios' ? 50 : 80}}
              />
              <Text style={{fontSize: 13, fontWeight: '900'}}>James Smith</Text>
              <Text note>273 London Road, BN2 1AQ</Text>
            </Body>
            <Right>
              <Text note  style={{fontSize: 14, fontWeight: '900'}}>3053.9 miles</Text>
            </Right>
          </ListItem>
        </List>
        <List>
          <ListItem avatar onPress={this.handleBarber}>
            <Left>
            <Thumbnail source={require('./assets/images/barber2.jpg')} />
            </Left>
            <Body>
                <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={4.5}
                fullStarColor={'orange'}
                starSize={20}
                containerStyle={{marginRight: Platform.OS === 'ios' ? 50 : 80}}
              />
              <Text style={{fontSize: 13, fontWeight: '900'}}>Gabriel Stone</Text>
              <Text note>9 Manchester Street, BN2</Text>
            </Body>
            <Right>
              <Text note  style={{fontSize: 14, fontWeight: '900'}}>3053.9 miles</Text>
            </Right>
          </ListItem>
        </List>
        <List>
          <ListItem avatar onPress={this.handleBarber}>
            <Left>
            <Thumbnail source={require('./assets/images/barber2.jpg')} />
            </Left>
            <Body>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.starCount}
                fullStarColor={'orange'}
                starSize={20}
                containerStyle={{marginRight: Platform.OS === 'ios' ? 50 : 80}}
              />
              <Text  style={{fontSize: 13, fontWeight: '900'}}>Audrey Benedict</Text>
              <Text note>1 Grafon Street, BN2 1AQ</Text>
            </Body>
            <Right>
              <Text note  style={{fontSize: 14, fontWeight: '900'}}>3053.9 miles</Text>
            </Right>
          </ListItem>
        </List>
        <List>
          <ListItem avatar onPress={this.handleBarber}>
            <Left>
            <Thumbnail source={require('./assets/images/barber2.jpg')} />
            </Left>
            <Body>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.starCount}
                fullStarColor={'orange'}
                starSize={20}
                containerStyle={{marginRight: Platform.OS === 'ios' ? 50 : 80}}
              />
              <Text  style={{fontSize: 13, fontWeight: '900'}}>Audrey Benedict</Text>
              <Text note>1 Grafon Street, BN2 1AQ</Text>
            </Body>
            <Right>
              <Text note  style={{fontSize: 14, fontWeight: '900'}}>3053.9 miles</Text>
            </Right>
          </ListItem>
        </List>
        <List>
          <ListItem avatar onPress={this.handleBarber}>
            <Left>
            <Thumbnail source={require('./assets/images/barber2.jpg')} />
            </Left>
            <Body>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.starCount}
                fullStarColor={'orange'}
                starSize={20}
                containerStyle={{marginRight: Platform.OS === 'ios' ? 50 : 80}}
              />
              <Text  style={{fontSize: 13, fontWeight: '900'}}>Audrey Benedict</Text>
              <Text note>1 Grafon Street, BN2 1AQ</Text>
            </Body>
            <Right>
              <Text note  style={{fontSize: 14, fontWeight: '900', top: 5}}>3053.9 miles</Text>
            </Right>
          </ListItem>
        </List>
        <List>
          <ListItem avatar onPress={this.handleBarber}>
            <Left>
            <Thumbnail source={require('./assets/images/barber2.jpg')} />
            </Left>
            <Body>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.starCount}
                fullStarColor={'orange'}
                starSize={20}
                containerStyle={{marginRight: Platform.OS === 'ios' ? 50 : 80}}
              />
              <Text  style={{fontSize: 13, fontWeight: '900'}}>Audrey Benedict</Text>
              <Text note>1 Grafon Street, BN2 1AQ</Text>
            </Body>
            <Right>
              <Text note  style={{fontSize: 14, fontWeight: '900', top: 5}}>3053.9 miles</Text>
            </Right>
          </ListItem>
        </List>
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
