import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

const App = ({checkUserSession,currentUser}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  // componentDidMount() {
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
  // }
  
  return (
    <div>    
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact render={() => 
            currentUser ? (<Redirect to='/'/>): (<SignInAndSignUpPage />
          )} />
        </Switch>
    </div>
  );
}  

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);