import {CartActionTypes} from './cart.types';

export const ToggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const removeQuantity = item => ({
    type: CartActionTypes.REMOVE_QUANTITY,
    payload: item
});