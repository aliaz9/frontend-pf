import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProductPage from './components/product-page/product-page';
import Home from './components/home/home';
import Layout from './Layout/Layout.jsx';
import SignIn from './components/sign-in/sign-in.jsx';
// import Nav from './components/nav/nav';


function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
        <Route path='/home'  component={Home}></Route>
        <Route exact path='/product' component={ProductPage}></Route>
        <Route exatct path={'/product/:id'} component={ProductPage}></Route>
        <Route path='/sign-in' component={SignIn}></Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
