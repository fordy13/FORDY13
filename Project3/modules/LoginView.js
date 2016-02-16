// location: /modules

'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

var Button = require('react-native-button');
var users = require('../users.json');
var AppView = require('./AppView');

var LoginView = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },
  render() {
    return (
      <View style={styles.container}>
          <TextInput ref="username" placeholder="Enter Username"
            style={styles.textInput}
            autoCapitalize="none" autoCorrect={false}
            onChange={(event) => this.setState({username: event.nativeEvent.text})}
            value={this.state.username}
          />
          <TextInput ref="password" placeholder="Enter Password"
            style={styles.textInput}
            autoCapitalize="none" autoCorrect={false}
            onChange={(event) => this.setState({password: event.nativeEvent.text})}
            value={this.state.password}
            secureTextEntry={true}
          />
          <Button containerStyle={styles.loginButtonCont} style={styles.loginButton} onPress={this._loginPress}>
            Log In
          </Button>
      </View>
    );
  },
  _loginPress(event) {
    console.log(this.state.username);
    this.props.navigator.push({
      name: 'App',
      component: AppView,
      passProps: {username: this.state.username}
    });
  },

});

const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loginButtonCont: {
    alignSelf: 'stretch',
    position: 'absolute',
    padding:5, 
    overflow:'hidden', 
    borderRadius:4, 
    backgroundColor: 'green',
    marginBottom: 2,
    left: 2,
    right: 2,
  }, 
  loginButton: {
    alignSelf: 'center', 
    color: 'white'

  },
  textInput: {
    textAlign: 'center',
    height: 40, 
    borderColor: 'gray', 
    left: 2,
    right: 2,
    bottom: 2,
  },
});

AppRegistry.registerComponent('LoginView', () => LoginView);

module.exports = LoginView;
