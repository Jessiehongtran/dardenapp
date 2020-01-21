import React, {useEffect} from 'react';
import {StripeProvider, Elements} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = (props) => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <StripeProvider apiKey="pk_test_l53qXD5ejH6Aj6eR38R86ido00h6baFUeR">
            <Elements>
                <CheckoutForm 
                history={props.history}
                bookingInfo = {props.bookingInfo}
                />
            </Elements>
        </StripeProvider>
    )
}

export default Checkout;
