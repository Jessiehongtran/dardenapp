import React, {useState} from 'react';
import '../styles/Details.scss';
import axios from 'axios';

const Details = (props) => {
    const [subService, setSubService] = useState({}) 

    const serviceId = localStorage.getItem('serviceId')

    const handleChange = e => {
        setSubService(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('https://darden-app.herokuapp.com/api/services/subService', 
                {
                    service_id: serviceId,
                    subService_name: subService
                })
              .then(res => {
                  console.log('res in details', res)
                  localStorage.setItem('subServiceId', res.data.id)
                  props.history.push('/role')
              })
              .catch(err => console.log(err.message))

    }

    return (
        <div className="details-frame">
            <h2>What's specifically your service?</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e => handleChange(e)}/>
                <button
                    className="details-btn"
                >Next</button>
            </form>

        </div>
    )
}

export default Details;