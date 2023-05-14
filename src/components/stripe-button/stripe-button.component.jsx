import React from "react";

import  StripeCheckout  from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51M9SBOF9LNmI3C814aLtEq9ipeG328FyDD0WllsvNU7tEug2kqXTTjSQZSOSAay6g89qLJ5xTtQoIaFmTsbb8Btl00Oi8bulnD';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CROWN Clothing Ltd"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description="{`Your toatal is $${price}`}"
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
