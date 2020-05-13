import React from 'react';
import './checkout-item.style.scss';

import {connect} from 'react-redux';

import {removeItem,addItem,removeQuantity}  from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem,removeItem,addItem,removeQuantity}) => {
    const { name, price, imageUrl,quantity} = cartItem;
    return(
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>            
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow' onClick={() => removeQuantity(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>                
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeQuantity: item => dispatch(removeQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);