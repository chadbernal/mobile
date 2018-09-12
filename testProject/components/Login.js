import React from 'react';
import API from '../utils/api';
import {
  StyleSheet,
   Text,
   View,
   ScrollView,
   TextInput,
   TouchableOpacity,
   } from 'react-native';



export default class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  }
  login = (e) => {
    API.login()
  }

  signupPage(){
    Actions.signup()
  }


  render() {

    return (
      <View style={styles.SignupForm}>
        <Text style={styles.compumatrix}> COMPUMATRIX </Text>
        <TextInput style={styles.textinput} placeholder = "Username "
        onChangeText = {(username) => this.setState({username})}
         />
        <TextInput style={styles.textinput}  placeholder = "Password "
        secureTextEntry={true}
      onChangeText = {(password) => this.setState({password})}
         />

        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.btn}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.signupPage}>
          <Text style={styles.signUptxt}> Sign up?</Text>
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
  signUptxt: {
    marginVertical: 30,
    fontSize: 16,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  compumatrix: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 50,
    fontSize: 35,
  },


});
