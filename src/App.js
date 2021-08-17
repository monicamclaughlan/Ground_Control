import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Product from './components/Product'
import Menu from './pages/Menu'
import About from './pages/About'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Login from './components/Login'
import Footer from './components/Footer'




function App() {

const [products, setProducts] = useState([])
const [selectedProduct, setSelectedProduct] = useState([])



  return (
    <div className="App">
  <Navbar/>
  <div className="wrapper">
  <Switch>
    <Route path exact='/' render={(rp) => <Shop {...rp} products={products} setProducts={setProducts} setSelectedProduct={setSelectedProduct}/>}/>
    <Route path='/product/:id' render={(rp) => <Product {...rp} product={selectedProduct} setSelectedProduct={setSelectedProduct}/>}/>
    <Route path='/menu'>
      <Menu/>
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
    <Route path='/login'> 
      <Login/>
    </Route>
  </Switch>
  </div>
  <Footer/>
    </div>
  );
}

export default App;
