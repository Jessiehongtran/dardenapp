import React, {useEffect, useState} from 'react';
import '../styles/Booking.scss';
import {withFormik, Form, Field} from 'formik';
import LocationField from '../components/LocationField';
import axios from 'axios';
// import {connect} from 'react-redux';
// import {getBookingInfo} from '../actions/index';
import * as Yup from "yup";


const Booking = ({errors}) => {
    const [serviceClicked, setServiceClicked] = useState({})

    const id = localStorage.getItem('serviceId')

    useEffect(() => {
        axios.get(`https://darden-app.herokuapp.com/api/services/${id}`)
            .then(res =>
                setServiceClicked(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [id])

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
                    <div className="info">
                        <Field className="input" type="text" name="units" placeholder="Apt/Unit #"/>
                    </div>
                    <div className="info">
                        <Field className="input" type="text" name="hours" placeholder="# Hours"/>
                        {errors.hours && <p className="error-message">{errors.hours}</p>}
                    </div>
                    <div className="info">
                        <Field className="input" type="text" name="price" placeholder="$ Pay/hour: 0.00"/>
                        {errors.price && <p className="error-message">{errors.price}</p>}
                    </div>
                </div>
                <Field name="location" component={LocationField}/>
               
            </Form>
        </div>
    )
}

const FormikBooking = withFormik({
    mapPropsToValues({location, address, units, hours, price}){
        return {
            address: address || "",
            units: units || "",
            hours: hours || "",
            price: price || ""
        };
    },

    validationSchema: Yup.object().shape({
        address: Yup.string()
                    .required(),
        hours: Yup.number()
                  .required()
                  .positive(),
        price: Yup.number()
                  .required()
                  .positive()
    }),

    handleSubmit(values, {props}){
        props.setBookingInfo(values)
        props.history.push('/verify')
    }


})(Booking)

export default FormikBooking;

// const mapStateToProps = state => {
//     console.log('state in Booking', state)
//     return {
//         isLoading: state.isLoading,
//         bookingInfo: state.bookingInfo,
//         error: state.error
//     }
// }

// export default connect(
//     mapStateToProps,
//     {getBookingInfo}
// )(
// FormikBooking);