import React, {useState, useEffect} from 'react';
import '../styles/Servicing.scss';
import axios from 'axios';
import Geosuggest from 'react-geosuggest';

const Servicing = () => {
    const [serviceClicked, setServiceClicked] = useState({})
    const [profile, setProfile] = useState({})

    const id = localStorage.getItem('serviceId')

    useEffect(() => {
        axios.get(`https://darden-app.herokuapp.com/api/services/${id}`)
            .then(res =>
                setServiceClicked(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const handleChange = event => {
        setProfile({...profile, [event.target.name]: event.target.value})
    }

    const handleSelect = event => {
        setProfile({...profile, role: event.target.value})
    }

    const onSuggestSelect = (suggest) => {
        const {location: {lat, lng}, label} = suggest;
        setProfile({
            ...profile,
            address: label,
            latitude: lat,
            longitude: lng
        })
        
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log('profile', profile)
    }


    const google= window.google

    return (
        <div className="servicing">
             <div>
                <img src={serviceClicked.service_icon} alt="service-icon"/>
                <p className="service-name">{serviceClicked.service_name}</p>
            </div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="role-type">
                    <p>Are you:</p>
                    <label> 
                        <input type="radio" name="radAnswer" value="business" onChange={e => handleSelect(e)}/>
                        Business
                    </label>
                    <label> 
                        <input type="radio" name="radAnswer" value="individual" onChange={e => handleSelect(e)}/>
                        Individual
                    </label>
                </div>
                <input type="text" name="name" placeholder="Your full name" onChange={e => handleChange(e)}/>
                <input type="email" name="email" placeholder="Your email" onChange={e => handleChange(e)}/>
                <input type="text" name="phoneNumber" placeholder="Your phone number" onChange={e => handleChange(e)}/>
                <Geosuggest
                        placeholder="Your address"
                        onSuggestSelect={onSuggestSelect}
                        location={new google.maps.LatLng(53.558572, 9.9278215)}
                        radius="20" />
                <button>Submit</button>
            </form>
        </div>
    )
    
}

export default Servicing;