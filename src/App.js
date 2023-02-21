import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Products from './components/products/products';
import ProductPage from './components/product-page/product-page';
import About from './components/about/about';

import Home from './components/home/home';
import Layout from './Layout/Layout.jsx';
import SignIn from './components/sign-in/sign-in.jsx';
import LogIn from './components/log-in/log-in';
// import Nav from './components/nav/nav';


function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
        <Route exact path='/'  component={Home}></Route>
        <Route path='/home'  component={Home}></Route>
        <Route exact path='/product' component={Products}></Route>
        <Route exatct path={'/product/:id'} component={ProductPage}></Route>
        <Route path='/sign-in' component={SignIn}></Route>
        <Route path='/log-in' component={LogIn}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/cart' component={LogIn}></Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
