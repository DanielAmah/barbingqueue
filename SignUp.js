/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, BackHandler, Dimensions, Image } from 'react-native';
import { Container, Button, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
// import Icon from 'react-native-vector-icons/Ionicons';


type Props = {};

export default class SignUp extends React.Component {

  static navigationOptions = {
    header: null,
   headerLeft: null,
   gesturesEnabled: false,
  };

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick = () => {
      this.props.navigation.navigate("SignUp");
      return true;
  };

  render() {
    return (
      <Container style={styles.container}>
      <Content>

      <Content style={{ flexDirection: 'row',  left: (Dimensions.get('window').width / 4) - 25,  marginTop: 40,}}>
        <Image source={require('./assets/images/logo.png')}   style={{  flex: 1,
          aspectRatio: 1.5, resizeMode: 'contain', justifyContent: 'center', alignContent: 'center' }} />
      </Content>

        <Form>
          <Item>
            <Icon ios='ios-person-outline' android="ios-person" style={{fontSize: 20, color: '#FF4F19'}}  />
            <Input placeholder='User Name' />
          </Item>
          <Item>
            <Icon ios='ios-mail-outline' android="md-mail" style={{fontSize: 20, color: '#FF4F19'}}  />
            <Input keyboardType={'email-address'} placeholder='Email' />
          </Item>
          <Item>
            <Icon ios='ios-call-outline' android="md-call" style={{fontSize: 20, color: '#FF4F19'}}  />
            <Input keyboardType={'phone-pad'} placeholder='Phone Number' />
          </Item>
          <Item>
            <Icon ios='ios-lock-outline' android="ios-lock" style={{fontSize: 20, color: '#FF4F19'}}  />
            <Input secureTextEntry={true} placeholder='Password' />
          </Item>
          <Item>
            <Icon ios='ios-lock-outline' android="ios-lock" style={{fontSize: 20, color: '#FF4F19'}}  />
            <Input secureTextEntry={true} placeholder='Confirm Password' />
          </Item>
          <Content style={{ flexDirection: 'row',  left: (Dimensions.get('window').width / 4) - 25,  marginTop: 30,}}>
            <Grid>
              <Col>
              <Button rounded danger style={{padding: 20, width: 150, justifyContent: 'center', backgroundColor: '#FF4F19'}}>
              <Text  style={{textAlign: 'center',  color: '#ffffff' }}>Sign Up</Text>
            </Button>
              </Col>
              <Col style={{ marginLeft: 15 }}>
              <Text  style={{ color: '#FF4F19', marginRight: 10}} >
                Already registered ?
              </Text>
              <Button transparent primary small>
                <Text style={{ color: '#FF4F19', marginRight: 10, fontSize: 17, fontWeight: 'bold'}}>SIGN IN</Text>
              </Button>
              </Col>
            </Grid>
          </Content>

          <Content style={{ flexDirection: 'row',  left: (Dimensions.get('window').width / 5) - 25,  marginTop: 40,}}>
          <Button iconLeft transparent primary small>
          <Icon name="logo-facebook" style={{marginRight: 10}} />
          <Text>Sign in with facebook</Text>
        </Button>
        <Button iconLeft transparent primary small>
          <Icon name="logo-google" style={{marginRight: 10, color: "red"}} />
          <Text>Sign in with google</Text>
        </Button>
          </Content>
        </Form>
       </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
  }
})
