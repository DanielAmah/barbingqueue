/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, BackHandler, Dimensions, Image } from 'react-native';
import { Container, Button, Header, Content, Form, Item, Input, Label, Icon, Body, Title, Left, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


type Props = {};

export default class ForgotPassword extends React.Component {

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
      <Container style={styles.container}>
      <Header>
        <Body style={{ flex: 1, alignItems:'center'}}>
          <Title>Forgot Password</Title>
        </Body>
      </Header>
      <Content>

      <Content style={{ flexDirection: 'row',  left: (Dimensions.get('window').width / 4) - 25,  marginTop: 40,}}>
        <Image source={require('./assets/images/logo.png')}   style={{  flex: 1,
          aspectRatio: 1.5, resizeMode: 'contain', justifyContent: 'center', alignContent: 'center' }} />
      </Content>

        <Form>
          <Item>
          <Icon ios='ios-mail-outline' android="ios-mail" style={{fontSize: 20, color: '#FF4F19'}}  />
          <Input placeholder='Email Address' />
          </Item>

          <Content style={{ flexDirection: 'row',  left: (Dimensions.get('window').width / 4) - 25,  marginTop: 30,}}>
          <Grid>
            <Col>
            <Button rounded danger style={{padding: 20, width: 150, justifyContent: 'center', backgroundColor: '#FF4F19'}}>
            <Text  style={{textAlign: 'center',  color: '#ffffff' }}>Reset Password</Text>
          </Button>
            </Col>
            <Col style={{ marginLeft: 15 }}>
            <Text  style={{ color: '#FF4F19', marginRight: 10}} >
              Remember?
            </Text>
            <Button transparent primary small>
              <Text style={{ color: '#FF4F19', marginRight: 10, fontSize: 17, fontWeight: 'bold'}} onPress={this._handleSignIn}>LOGIN</Text>
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
