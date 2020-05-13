import React from 'react';
import './cart-icon.style.scss';

import {connect} from 'react-redux'
import {ToggleCart} from '../../redux/cart/cart.actions'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
//import CartItem from '../cart-item/cart-item.component';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ToggleCart, cartCount}) => (
    <div className="cart-icon" onClick={ToggleCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
    </div>
);
const mapDispatchToProps = dispatch => ({
    ToggleCart : () => dispatch(ToggleCart())
})
 const mapStateToProps = state => ({
    cartCount : selectCartItemsCount(state)
 })

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);