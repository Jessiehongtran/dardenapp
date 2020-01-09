import React from 'react';
import '../styles/Booking.scss';

const Booking = (props) => {
    console.log('props in Booking', props)

    return (
        <div className="booking">
            <div>
                <img src={props.serviceChosen.icon} alt="service-icon"/>
                <p className="service-name">{props.serviceChosen.name}</p>
            </div>
            <form>
                <label>
                    Work Description
                    <input
                        type="text"

                    />
                </label>
                <label>
                    Your Address
                    <input
                        type="text"
                        
                    />
                </label>
                <label>
                    Describe Ideal Candidate
                    <input
                        type="text"
                        
                    />
                </label>
                <label>
                    Estimated Number of Hours
                    <input
                        type="text"
                        
                    />
                </label>
                <label>
                    Pay/hour
                    <input
                        type="text"
                        
                    />
                </label>
                <label>
                    Your Contact
                    <input
                        type="text"
                        
                    />
                </label>
            </form>
        </div>
    )
}

export default Booking;