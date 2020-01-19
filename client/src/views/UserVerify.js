import React from 'react';
import SignUp from '../components/SignUp';
import * as Yup from "yup";

const UserVerify = (props) => {
    console.log('props in userverify', props)
    return (
        <div>
            <SignUp
                history={props.history}
                bookingInfo={props.bookingInfo}
            />
        </div>
    )
}

export default UserVerify;