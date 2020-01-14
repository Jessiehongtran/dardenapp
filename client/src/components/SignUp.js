import React from 'react';
import {withFormik, Form, Field, yupToFormErrors} from "formik";
import * as Yup from "yup";
import '../styles/SignUp.scss';

const SignUp = ({errors}) => {

    return (
        <div className="signup-frame">
            <div className="text">
                <p className="welcome">Hello! Welcome to DarDen.</p>
                <p className="welcome">Looks like your first time here, that's awesome!</p>
                <p className="note">Create a password to book your first service.</p>
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
            .required(),
        password: Yup.string()
            .min(6)
            .required()
    }),

    handleSubmit(values){
        console.log(values)
    }
})(SignUp)

export default FormikSignUp;