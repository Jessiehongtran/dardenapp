import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';
import '../styles/CheckoutForm.scss';

const CheckoutForm = ({bookingInfo, stripe, history}) => {
    if (bookingInfo === null){
        history.push('/product')
    }

    console.log(bookingInfo)

    const [receiptUrl, setReceiptUrl] = useState('')

    const totalPrice = bookingInfo.hours * bookingInfo.price 
    const totalPrice_float = totalPrice.toFixed(2)

    console.log('totalPrice', totalPrice)

    const handleSubmit = async event => {
        event.preventDefault()

        const {token} = await stripe.createToken()

        const order = await axios.post('https://darden-app.herokuapp.com/api/stripe/charge', {
            amount: totalPrice_float.toString().replace('.', ''),
            source: token.id,
            receipt_email: 'htran2@babson.edu'
        })

        setReceiptUrl(order.data.charge.receipt_url)
    }

    if (receiptUrl){
        return (
            <div className="success">
                <h2>Payment Successful!</h2>
                <a href={receiptUrl}>View Receipt</a>
                <Link to="/">Home</Link>
            </div>
        )
    }

    return (
        <div className="checkout-form">
            <p>Total: ${totalPrice_float}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Card details
                    <CardNumberElement/>
                </label>
                <label>
                    Expiration date
                    <CardExpiryElement/>
                </label>
                <label>
                    CVC 
                    <CardCVCElement/>
                </label>
                <button type="submit" className="order-button">
                    Pay
                </button>

            </form>
        </div>
    )

}

export default injectStripe(CheckoutForm);