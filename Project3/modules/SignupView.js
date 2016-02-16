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

var SignupView = React.createClass({
  getInitialState: function() {
    return {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      passwordagain: '',
    };
  },
  render() {
    return (
      <View style={styles.container}>
        <TextInput ref="firstname" placeholder="First Name"
          style={styles.textInput}
          autoCapitalize="none" autoCorrect={false}
          onChange={(event) => this.setState({firstname: event.nativeEvent.text})}
          value={this.state.firstname}
        />
        <TextInput ref="lastname" placeholder="Last Name"
          style={styles.textInput}
          autoCapitalize="none" autoCorrect={false}
          onChange={(event) => this.setState({lastname: event.nativeEvent.text})}
          value={this.state.lastname}
          secureTextEntry={true}
        />
        <TextInput ref="username" placeholder="Desired Username"
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
        <TextInput ref="passwordAgain" placeholder="Re-enter Password"
          style={styles.textInput}
          autoCapitalize="none" autoCorrect={false}
          onChange={(event) => this.setState({passwordAgain: event.nativeEvent.text})}
          value={this.state.passwordAgain}
          secureTextEntry={true}
        />
        <Button containerStyle={styles.signupButtonCont} style={styles.signupButton} onPress={this._loginPress}>
          Sign Up
        </Button>
      </View>
    );
  },
  _loginPress(event) {
    this.props.navigator.push({
      name: 'App',
      component: AppView,
      passProps: {username: this.state.username},
    });
  },

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  signupButton: {
    color: 'green',
    borderColor: 'green',
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
    marginBottom: 2
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

AppRegistry.registerComponent('SignupView', () => SignupView);

module.exports = SignupView;
