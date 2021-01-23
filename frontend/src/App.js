import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">amazoff</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign in</a>
                </div>
            </header>
            <main>
                <Route exact path="/" component={HomeScreen}></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/cart/:id?" component={CartScreen}></Route>
            </main>
            <footer className="row center">(2021) - All rights reserved</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
