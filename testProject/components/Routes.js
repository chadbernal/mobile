import React from 'react';
import {Router,Scene } from 'react-native-router-flux';

import LoginForm from './Login';
import SignupForm from './Signup';
import sampleText from './sample';

export default class Routes extends React.Component {
  render(){
      return(
        <Router>
          <Scene key="root">
            <Scene key="login" component={LoginForm} title="Login" initial hideNavBar={true}/>
            <Scene key="signup" component={SignupForm} title="Signup" hideNavBar={true}/>
            <Scene key="sample" component={sampleText} title="sample"/>
          </Scene>
        </Router>

      );
  }
}
