import React from 'react';
import SignUp from '../components/SignUp';


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