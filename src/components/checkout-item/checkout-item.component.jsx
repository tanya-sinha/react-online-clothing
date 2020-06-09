import React from 'react';
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
  } from './checkout-item.style';

import {connect} from 'react-redux';

import {removeItem,addItem,removeQuantity}  from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem,removeItem,addItem,removeQuantity}) => {
    const { name, price, imageUrl,quantity} = cartItem;
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>         
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div className='arrow' onClick={() => removeQuantity(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>                
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => removeItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeQuantity: item => dispatch(removeQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);