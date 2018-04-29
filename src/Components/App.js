import React, { Component } from 'react';
import { SignIn } from './SignIn';
import { Main } from './Main';
import { Route, Switch } from 'react-router-dom'


const Window = () => (
  <Switch>
    <Route exact path='/' component={SignIn}/>
    <Route path='/pay' component={Main}/>
  </Switch>
)

class App extends Component {
  render() {
    return (
      <Window/>
    );
  }
}

export default App;
