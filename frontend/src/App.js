import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">amazoff</Link>
                </div>
                <div>
                    <Link to="/cart">Cart
                    {cartItems.length > 0 && (
                      <span className="badge">{cartItems.length}</span>
                    )}
                    </Link>
                    <Link to="/signin">Sign in</Link>
                </div>
            </header>
            <main>
                <Route exact path="/" component={HomeScreen}></Route>
                <Route path="/products/:id" component={ProductScreen}></Route>
                <Route path="/cart/:id?" component={CartScreen}></Route>
            </main>
            <footer className="row center">(2021) - All rights reserved</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
