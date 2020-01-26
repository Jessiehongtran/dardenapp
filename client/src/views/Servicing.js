import React, {useState, useEffect} from 'react';
import '../styles/Servicing.scss';
import axios from 'axios';
import Geosuggest from 'react-geosuggest';
import {Link} from 'react-router-dom';

const Servicing = () => {
    const [serviceClicked, setServiceClicked] = useState({})
    const [profile, setProfile] = useState({})
    const [dardieId, setDardieId] = useState()

    const serviceId = localStorage.getItem('serviceId')

    useEffect(() => {
        axios.get(`https://darden-app.herokuapp.com/api/services/${serviceId}`)
            .then(res =>
                setServiceClicked(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [serviceId])

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
        const profileToPost = {
            service_id: serviceId,
            role: profile.role,
            name: profile.name,
            email: profile.email,
            phoneNumber: profile.phoneNumber,
            address: profile.address
        }

        axios.post('https://darden-app.herokuapp.com/api/dardies', profileToPost)
             .then(res => {
                 console.log('res in servicing', res)
                 setDardieId(res.data.id)
             })
             .catch(err => console.log(err.message))
    }


    const google= window.google

    // after post dardie successfully, if there is id returned, show this screen
    if (dardieId){
        return (
            <div className="success">
                <h2>You are on board successfully, our team will contact you soon!</h2>
                <Link to="/" className="link-to">Home</Link>
            </div>
        )

    }

    return (
        <div className="servicing">
             <div>
                <img src={serviceClicked.service_icon} alt="service-icon"/>
                <p className="service-name">{serviceClicked.service_name}</p>
            </div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="role-type">
                    <p>Are you:</p>
                    <div className="role">
                        <input type="radio" name="radAnswer" value="business" onChange={e => handleSelect(e)}/>
                        <label>Business</label>
                    </div>
                        
                    <div className="role">
                        <input type="radio" name="radAnswer" value="individual" onChange={e => handleSelect(e)}/>
                        <label>Individual</label>
                    </div>
                </div>
                <div>
                    <input type="text" name="name" placeholder="Your full name" onChange={e => handleChange(e)}/>
                    <input type="email" name="email" placeholder="Your email" onChange={e => handleChange(e)}/>
                    <input type="tel" name="phoneNumber" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" title="Ten digit codes"  required placeholder="Your phone number" onChange={e => handleChange(e)}/>
                    <Geosuggest
                            placeholder="Your address"
                            onSuggestSelect={onSuggestSelect}
                            location={new google.maps.LatLng(53.558572, 9.9278215)}
                            radius="20" />
                </div>
                <button
                    className="submit-btn">
                        Submit
                </button>
            </form>
        </div>
    )
    
}

export default Servicing;