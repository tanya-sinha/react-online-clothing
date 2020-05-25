import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { HeaderContainer,LogoContainer,OptionConatiner,OptionLinks } from './header.styles'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';

import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors"

import {signOutStart} from '../../redux/user/user.actions'

const Header = ({currentUser, isHidden,signOutStart}) => (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionConatiner>        
        <OptionLinks to='/shop'>
          SHOP
        </OptionLinks>
        <OptionLinks to='/shop'>
          CONTACT
        </OptionLinks>
        {
          currentUser ?
          <OptionLinks as='div' onClick={signOutStart}>SIGN OUT</OptionLinks>
          :
          <OptionLinks to='/signin'>
          SIGN IN
        </OptionLinks>  
        }
        <CartIcon />
          
      </OptionConatiner>
     {isHidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden : selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);