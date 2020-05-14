import React from 'react';
import {
    CollectionItemContainer, 
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles.jsx';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl} = item;
    return (
    <CollectionItemContainer>
        <BackgroundImage
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
    </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);