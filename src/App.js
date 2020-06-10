import React, {useEffect, lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import Header from './components/header/header.component';

import {GlobalStyle} from './global.styles';

import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const Page404 = ({ location }) => (<ErrorBoundary />);

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
      <GlobalStyle />    
      <Header />
      <ErrorBoundary>             
          <Suspense fallback={<Spinner />}>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path='/signin'
                render={
                  () =>
                  this.props.currentUser ? (
                    <Redirect to='/' />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                }
              /> 
              <Route component={Page404} />
              </Switch> 
            </Suspense>               
      </ErrorBoundary>
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