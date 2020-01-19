import axios from 'axios';

export const BOOKING_LOADING = 'FETCHING_SERVICES_LOADING';
export const BOOKING_SUCCESS = 'FETCHING_SERVICES_SUCCESS';
export const BOOKING_FAILURE = 'FETCHING_SERVICES_FAILURE';

export const getBookingInfo = (booking) => {
    console.log('props in getBookingInfo', booking)
    return dispatch => {
        dispatch({type: BOOKING_LOADING});
        axios
            .post(`https://darden-app.herokuapp.com/api/requests`)
            .then(res => 
                dispatch({type: BOOKING_SUCCESS, payload: res.data}))
            .catch(err => 
                dispatch({type: BOOKING_FAILURE, payload: err.response}))
    }
}

