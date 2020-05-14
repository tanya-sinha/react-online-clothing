import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { HeaderContainer,LogoContainer,OptionConatiner,OptionLinks } from './header.styles'

import {auth} from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';

import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors"

const Header = ({currentUser, isHidden}) => (
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
          <OptionLinks as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLinks>
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

export default connect(mapStateToProps)(Header);