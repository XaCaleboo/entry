import React, { Component } from 'react';
import StyledForm from './StyledForm';
import Pay from './Pay';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={StyledForm}/>
        <Route path='/pay' component={Pay}/>
      </Switch>
    </main>
  )
class App extends Component {
    render() {
        return (
            <div className="App">
                <Main/>
            </div>
        );
    }
}

export default App;
