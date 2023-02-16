import React from 'react';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import ProductPage from './components/product-page/product-page';
import Questions from './components/questions/questions';
import Steps from "./components/steps/steps";
import Home from './components/home/home';
import Nav from './components/nav/nav.jsx';
import Layout from './Layout/Layout.jsx';
// import Nav from './components/nav/nav';


function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
        <Route path='/home'  component={Home}></Route>
        <Route exact path='/product' component={ProductPage}></Route>
        <Route exact path='/Quetion' component={Questions}></Route>
        <Route exact path='/Steps' component={Steps}></Route>
        <Route exatct path={'/product/:id'} component={ProductPage}></Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
