// location: /modules

'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Button = require('react-native-button');
var Swiper = require('react-native-swiper');
var LoginView = require('./LoginView');
var SignupView = require('./SignupView');

var WelcomeView = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Swiper style={styles.wrapper} 
            showsButtons={false}
            autoplay={true}
            loop={false}
            paginationStyle={{bottom: 75}}
            activeDot={<View style={styles.activeDot} />}
            >
            <View style={styles.slides}>
              <Text style={styles.text}>Welcome to</Text>
              <Image style={{flex:1,width: 300}}
                source={require('../assets/VerbalCare-logo.png')}
                resizeMode='contain' />
            </View>
            <View style={styles.slides}>
              <Text style={styles.text}>make background an awesome out-of-focus image; add some flavor text</Text>
            </View>
            <View style={styles.slides}>
              <Text style={styles.text}>Get people Interested!</Text>
            </View>
          </Swiper>
        </View>

        <View style={styles.buttonContainer}>
          <Button containerStyle={styles.loginButtonCont} style={styles.loginButton} onPress={this._loginPress}>
          Log In
          </Button>
          <Button containerStyle={styles.signupButtonCont} style={styles.signupButton} onPress={this._signupPress}>
          Sign Up
          </Button>
        </View>
      </View>

    );
  },
  _loginPress() {
    this.props.navigator.push({
      name: 'Login',
      component: LoginView,
    });
  },
  _signupPress() {
    this.props.navigator.push({
      name: 'Sign Up',
      component: SignupView,
    });
  },
});

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: 'green', 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    left: 2,
    right: 2,
    bottom: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loginButton: {
    alignSelf: 'center', 
    color: 'white'

  },
  loginButtonCont: {
    alignSelf: 'stretch',
    padding:5, 
    overflow:'hidden', 
    borderRadius:4, 
    backgroundColor: 'green',
    marginBottom: 2
  }, 
  signupButton: {
    color: 'green',
    borderColor: 'green',
    overflow: 'hidden',
    alignItems: 'center', 
  },
  signupButtonCont: {
    alignSelf: 'stretch',
    padding:5, 
    overflow:'hidden', 
    borderRadius:4, 
    borderWidth: 3,
    borderColor: 'green', 
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  wrapper: {
  },
  slides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('WelcomeView', () => WelcomeView);

module.exports = WelcomeView;
