import React from 'react';
import {
  StyleSheet,
   Text,
   View,
   ScrollView,
   TextInput,
   TouchableOpacity,
   } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class SignupForm extends React.Component {

  loginPage(){
    Actions.pop()
  }

  render() {

    return (
      <View style={styles.SignupForm}>
        <Text style={styles.header}> Sign Up </Text>
        <TextInput style={styles.textinput}  placeholder = "Name "
         onChangeText = {(name) => this.setState({name})}
          />

        <TextInput style={styles.textinput} placeholder = "Username "
        onChangeText = {(username) => this.setState({username})}
         />

        <TextInput style={styles.textinput}  placeholder = "Password "
        secureTextEntry={true}
      onChangeText = {(password) => this.setState({password})}
         />

        <TextInput style={styles.textinput} placeholder = "Email "
        onChangeText = {(email) => this.setState({email})}
         />

        <TouchableOpacity style={styles.button} onPress={this.signup}>
          <Text style={styles.btn}> Sign Up </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.loginPage}>
          <Text style={styles.loginTxt}> login </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  SignupForm: {
    flex: 1,
    backgroundColor: '#36485f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor:'#f8f8f8',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    backgroundColor: '#59cbbd'
  },
  btn: {
    color:'#fff',
    fontWeight: 'bold'
  },
  loginTxt: {
    marginVertical: 30,
    fontSize: 16,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

});
