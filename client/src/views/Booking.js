import React from 'react';
import '../styles/Booking.scss';
import {withFormik, Form, Field} from 'formik';
import LocationField from '../components/LocationField';
import axios from 'axios';


const Booking = (props) => {
    console.log('props in Booking', props)

    return (
        <div className="booking">
            <div>
                <img src={props.serviceChosen.icon} alt="service-icon"/>
                <p className="service-name">{props.serviceChosen.name}</p>
            </div>
            <Form className="form">
                <button className="book-btn">Book</button>
                {/* <Field className="input" type="text" name="zipcode" placeholder="Zipcode"/> */}
                <div className="work-info">
                    <Field className="input" type="text" name="units" placeholder="Apt/Unit #"/>
                    <Field className="input" type="text" name="hours" placeholder="# Hours"/>
                </div>
                <Field name="location" component={LocationField}/>
                
            </Form>
        </div>
    )
}

const FormikBooking = withFormik({
    mapPropsToValues({location, zipcode, units, hours}){
        return {
            location: location || "",
            zipcode: zipcode || "",
            units: units || "",
            hours: hours || ""
        };
    },

    handleSubmit(values){
        console.log(values)
        axios.post()
    }


})(Booking)

export default FormikBooking;