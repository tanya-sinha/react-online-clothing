import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_k4xYEUhPYKTpNEiNoxuN8ty400pfIfYBvW';

    const onToken = token => {
        console.log(token);
        alert('Your Payment is successful!')
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='TS Clothing Ltd.'
        shippingAddress
        billingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        ></StripeCheckout>
    )
}

export default StripeCheckoutButton;