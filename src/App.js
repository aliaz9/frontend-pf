import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Nav}></Route>
      </Switch>
    </div>
  );
}

export default App;
