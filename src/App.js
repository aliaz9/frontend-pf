import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Cards from './components/cards/cards';
import ProductPage from './components/product-page/product-page';
import SignIn from './components/sign-in-form/sign-in-form';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Cards}></Route>
        <Route exact path='/product' component={ProductPage}></Route>
        <Route path='/sign-in' component={SignIn}></Route>
      </Switch>
    </div>
  );
}

export default App;
