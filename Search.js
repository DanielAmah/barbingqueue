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
          Footer, FooterTab, Thumbnail
        } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SideBar from './SideBar';


type Props = {};

export default class Search extends React.Component {

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);
    this.state= {
      value: ''
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

  handleSearch = () => {
    navigation.navigate("SearchPage");
  }

  render() {
    return (

      <ImageBackground source={require('./assets/images/map.png')}
        style={styles.backgroundImage}>
      <Container>

      <Content style={{ top: 50 }}>
      <Text style={{color: "#FFFFFF", fontSize: 20, left: (Dimensions.get('window').width / 4) - 10}}>
       SEARCH FOR BARBERS
       </Text>
      <Text style={{color: "#FFFFFF", fontSize: 24, marginTop: 15, marginLeft: 25, fontWeight: '900', color: '#CF87A4', left: (Dimensions.get('window').width / 4) - 10 }}> AROUND YOU</Text>

      <Form style={{ marginLeft: 15, marginRight: 15, marginTop: 20 }}>
      <Item rounded style={{borderColor: "#FFF", borderWidth: 2}}>
      <Icon ios='ios-search-outline' android="ios-search" style={{fontSize: 25, color: "#FFF"}}  />
      <Input placeholder='E.g Manchester' placeholderTextColor="#FFF" style={{ color: "#FFF" }} value="" />
      </Item>
      <Button style={styles.buttonCircle} onPress={this.props.onPress}>
    <Icon ios='ios-search-outline' android="ios-search"
    style={{fontSize: 30, color: "#FFF"}}  />
    </Button>
    </Form>
      </Content>
      <Content scrollEnabled={false} style={{height: 200, backgroundColor: "#ddd", paddingTop: 30}}>
        <Text style={{ left: (Dimensions.get('window').width / 4) - 10, fontSize: 16}}>
        Ready for your first haircut?
        </Text>
        <Text style={{ left: (Dimensions.get('window').width / 4) + 10, fontSize: 16, fontWeight: 'bold'}}>
        Here are some barbers
        </Text>
        <Grid style={{ marginTop: 20 }}>
        <Col style={{ backgroundColor: '#ddd', height: 300}}>
        <Content style={{paddingLeft: 40, paddingTop: 50}}>
        <Thumbnail style={{width: 100, height: 100, borderRadius: 50, marginRight: 15 }} large source={require('./assets/images/barber1.jpg')} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 15, marginRight: 15 }}>
          JOHN JAMES
          </Text>
        </Content>
        </Col>
        <Col style={{ backgroundColor: '#CF87A4', height: 300}}>
        <Content style={{paddingLeft: 50, paddingTop: 50}}>
        <Thumbnail  style={{width: 100, height: 100, borderRadius: 50, marginRight: 15  }} large source={require('./assets/images/barber2.jpg')} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 15, marginRight: 15}}>
          PETER SMITH
          </Text>
        </Content>
        </Col>
        </Grid>
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
