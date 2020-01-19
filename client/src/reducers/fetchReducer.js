import {BOOKING_LOADING, BOOKING_SUCCESS} from '../actions/index';

const initialState = {
    isLoading: false,
    bookingInfo: [],
    error: ''
}

export const submitBooking = (state=initialState, action) => {
    switch(action.type){
        case BOOKING_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }

        case BOOKING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                bookingInfo: action.payload,
                error: ''
            }
        
        default:
            return state
    }
}