import React, {useEffect} from 'react';
import axios from 'axios';

const Matching = () => {
    const [clientRequest, setClientRequest] = useState();
    const [dardies, setDardies] = useState()

    const requestId = localStorage.getItem('requestId')
    const serviceId = localStorage.getItem('serviceId')

    useEffect(() => {
        axios.post(`https://darden-app.herokuapp.com/api/dardies/serviceId/${serviceId}`)
             .then(res => {
                 console.log('res in Matching', res)
             })
             .catch(err => {
                 console.log(err.message)
             })
        axios.post(`https://darden-app.herokuapp.com/api/requests/${requestId}`)
             .then(res => {
                 console.log('res in Matching', res)
             })
             .catch(err => {
                 console.log(err.message)
             })
             
    }, [])

    return (
        <div></div>
    )
}

export default Matching;