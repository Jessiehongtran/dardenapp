import React from 'react';
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import '../styles/SignUp.scss';
import axios from 'axios';

const SignUp = ({errors, touched, handleBlur}) => {
    console.log('errors' + errors)
    console.log('touched' + touched)
    console.log('handleBlur' + handleBlur)

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
                .test({
                    name: 'duplicate-email-check',
                    params: 'value',
                    message: 'Email already exists please use another email or login',
                    test: async (value) => {
                        axios
                            .post('https://darden-app.herokuapp.com/api/clients/checkemail', value)
                            .then(emailReturned => {
                                if (emailReturned === "email"){
                                    return true
                                } else {
                                    return false
                                }
                            })
                            .catch(err => console.log(err))
                    }
                })
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
                })
                .catch(err => {
                    console.log(err.message)
                })
                
        }
    }
    
)(SignUp)

export default FormikSignUp;