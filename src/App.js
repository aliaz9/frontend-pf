import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav/nav';
import Cards from './components/cards/cards';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Cards}></Route>
      </Switch>
    </div>
  );
}

export default App;
