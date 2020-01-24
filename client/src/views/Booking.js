import React, {useEffect, useState} from 'react';
import '../styles/Booking.scss';
import {withFormik, Form, Field} from 'formik';
import LocationField from '../components/LocationField';
import axios from 'axios';
import {connect} from 'react-redux';
import {getBookingInfo} from '../actions/index';


const Booking = () => {
    const [serviceClicked, setServiceClicked] = useState({})

    const id = localStorage.getItem('serviceId')

    useEffect(() => {
        axios.get(`https://darden-app.herokuapp.com/api/services/${id}`)
            .then(res =>
                setServiceClicked(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log('here', serviceClicked)

    return (
        <div className="booking">
            <div>
                <img src={serviceClicked.service_icon} alt="service-icon"/>
                <p className="service-name">{serviceClicked.service_name}</p>
            </div>
            <Form className="form">
                <button className="book-btn">Book</button>
                <div className="work-info">
                    <Field className="input" type="text" name="units" placeholder="Apt/Unit #"/>
                    <Field className="input" type="text" name="hours" placeholder="# Hours"/>
                    <Field className="input" type="text" name="price" placeholder="$ Price/hour: 0.00"/>
                </div>
                <Field name="location" component={LocationField}/>
                
            </Form>
        </div>
    )
}

const FormikBooking = withFormik({
    mapPropsToValues({location, address, units, hours, price}){
        return {
            location: location || "",
            address: address || "",
            units: units || "",
            hours: hours || "",
            price: price || ""
        };
    },

    handleSubmit(values, {props}){
        props.setBookingInfo(values)
        props.history.push('/verify')
    }


})(Booking)


const mapStateToProps = state => {
    console.log('state in Booking', state)
    return {
        isLoading: state.isLoading,
        bookingInfo: state.bookingInfo,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {getBookingInfo}
)(FormikBooking);