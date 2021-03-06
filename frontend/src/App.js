import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import { signout } from './actions/userActions';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

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
                    {
                      userInfo ? (
                        <div className="dropdown">
                          <Link to="#">
                            {userInfo.name}<span> </span>
                            <i className="fa fa-caret-down"></i>
                          </Link>
                          <ul className="dropdown-content">
                            <li>
                                <Link to="/profile">User profile</Link>
                            </li>
                            <li>
                                <Link to="/orderhistory">Order history</Link>
                            </li>
                            <li>
                                <Link to="#signout" onClick={signoutHandler}>Sign out</Link>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <Link to="/signin">Sign in</Link>
                      )
                    }
                    {
                      userInfo && userInfo.isAdmin && (
                        <div className="dropdown">
                          <Link to="#admin">
                            Admin <span> </span>
                            <i className="fa fa-caret-down"></i>
                          </Link>
                          <ul className="dropdown-content">
                            <li>
                              <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                              <Link to="/productlist">Product List</Link>
                            </li>
                            <li>
                              <Link to="/orderlist">Order List</Link>
                            </li>
                            <li>
                              <Link to="/userlist">User List</Link>
                            </li>
                          </ul>
                        </div>

                      )
                    }
                </div>
            </header>
            <main>
                <Route exact path="/" component={HomeScreen}></Route>
                <Route path="/products/:id" component={ProductScreen}></Route>
                <Route path="/signin" component={SigninScreen}></Route>
                <Route path="/register" component={RegisterScreen}></Route>
                <Route path="/shipping" component={ShippingAddressScreen}></Route>
                <Route path="/payment" component={PaymentMethodScreen}></Route>
                <Route path="/placeorder" component={PlaceOrderScreen}></Route>
                <Route path="/cart/:id?" component={CartScreen}></Route>
                <Route path="/order/:id" component={OrderScreen}></Route>
                <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
                <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
                <PrivateRoute path="/productlist" component={ProductListScreen}></PrivateRoute>
            </main>
            <footer className="row center">(2021) - All rights reserved</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
