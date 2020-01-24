import React from 'react';
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import '../styles/SignUp.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';

const SignUp = ({errors}) => {

    return (
        <div className="signup-frame">
            <div className="text">
                <p className="welcome">Hello! Welcome to DarDen.</p>
                <p className="welcome">Looks like you are excited to get some work done!</p>
                <p className="note">Please fill out some information to proceed.</p>
            </div>
            <Form>
                <div>
                    <Field className="field" type="text" name="email" placeholder="Email"/>   
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div>
                    <Field className="field" type="password" name="password" placeholder="Password"/>
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <button className="signup-btn">Next</button>
            </Form>
            <Link to=""><p className="login-tag">Login</p></Link>
        </div>
    )
}

const FormikSignUp = withFormik({

        mapPropsToValues({email, password}){
            return {
                email: email || "",
                password: password || ""
            }
        },

        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email()
                // .test({
                //     name: 'duplicate-email-check',
                //     params: 'value',
                //     // message: 'Email already exists please use another email or login',
                //     test:  async (value) => {
                //         console.log('value', value)
                //         axios
                //             .post('https://darden-app.herokuapp.com/api/clients/checkemail', value)
                //             .then(emailReturned => {
                //                 console.log('emailReturned', emailReturned)
                //                 if (emailReturned){
                //                     return 
                //                 } else {
                //                     return false
                //                 }
                //             })
                //             .catch(err => console.log(err))
                //     }
                // })
                .required(),
            password: Yup.string()
                .min(6)
                .required()
        }),

        handleSubmit(values, {props}){
            axios.post(`https://darden-app.herokuapp.com/api/clients/signup`, values)
                .then(res => {
                    localStorage.setItem('userId', res.data.id)
                    props.history.push('/summary')
                    console.log('props in signup', props)
                    // These following should be moved to payment later on
                    const userId = localStorage.getItem('userId')
                    const serviceId = localStorage.getItem('serviceId')
                    const bookingRequest = {
                        user_id: userId,
                        service_id: serviceId,
                        unit: props.bookingInfo.units,
                        hours: props.bookingInfo.hours,
                        address: props.bookingInfo.address,
                        price: props.bookingInfo.price
                    }
                    axios.post(`https://darden-app.herokuapp.com/api/requests`, bookingRequest)
                         .then(res => {
                             console.log('res after post bookingRequest', res)
                             localStorage.setItem('requestId', res.data.id)
                         })
                         .catch(err => console.log(err.message))
                })
                .catch(err => {
                    console.log(err.message)
                })
                
        }
    }
    
)(SignUp)

export default FormikSignUp;