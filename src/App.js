import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import About from './pages/About'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Login from './components/Login'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
  <Navbar/>
  <Switch>
    <Route path exact = '/'>
      <Shop/>
    </Route>
    <Route path='/about'>
      <About/>
    </Route>
    <Route path ='/blog'>
      <Blog/>
    </Route>
    <Route path='/cart'>
      <Cart/>
    </Route>
    <Route path ='/login'> 
      <Login/>
    </Route>
  </Switch>
  <Footer/>
    </div>
  );
}

export default App;
