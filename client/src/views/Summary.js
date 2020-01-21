import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../styles/Summary.scss';


const Summary = (props) => {
    console.log('props in Summary', props)
    const [serviceClicked, setServiceClicked] = useState({})

    const serviceId = localStorage.getItem('serviceId')
    useEffect(() => {
        Axios.get(`https://darden-app.herokuapp.com/api/services/${serviceId}`)
             .then(res => {
                 setServiceClicked(res.data)
             })
             .catch(err => console.log(err.message))
    }, [])

    console.log('serviceClicked', serviceClicked)

    const handlePurchase = prod => () => {
        props.history.push('/checkout')
    }

    return (
        <div className="summary-frame">
            <img src={serviceClicked.service_icon} alt="icon"/>
            <p>Service:  {serviceClicked.service_name}</p>
            <p>Apt/Unit #: {props.bookingInfo.units}</p>
            <p>Address: {props.bookingInfo.addresss}</p>
            <p># Hours: {props.bookingInfo.hours}</p>
            <p>$ Price/hour: {props.bookingInfo.price}</p>
            <button
                className="summary-btn" 
                onClick={handlePurchase(props.bookingInfo)}
            >Pay</button>
        </div>
    )
}

export default Summary;