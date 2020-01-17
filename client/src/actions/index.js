import axios from 'axios';

export const FETCHING_SERVICES_LOADING = 'FETCHING_SERVICES_LOADING';
export const FETCHING_SERVICES_SUCCESS = 'FETCHING_SERVICES_SUCCESS';
export const FETCHING_SERVICES_FAILURE = 'FETCHING_SERVICES_FAILURE';

export const getClickedService = (serviceId) => {
    console.log('props in getServices', serviceId)
    return dispatch => {
        dispatch({type: FETCHING_SERVICES_LOADING});
        axios
            .get(`https://darden-app.herokuapp.com/api/services/${serviceId}`)
            .then(res => 
                dispatch({type: FETCHING_SERVICES_SUCCESS, payload: res.data}))
            .catch(err => 
                dispatch({type: FETCHING_SERVICES_FAILURE, payload: err.response}))
    }
}

