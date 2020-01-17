import {FETCHING_SERVICES_LOADING, FETCHING_SERVICES_SUCCESS} from '../actions/index';

const initialState = {
    isLoading: false,
    clickedService: [],
    error: ''
}

export const fetchServices = (state=initialState, action) => {
    switch(action.type){
        case FETCHING_SERVICES_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }

        case FETCHING_SERVICES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                clickedService: action.payload,
                error: ''
            }
        
        default:
            return state
    }
}