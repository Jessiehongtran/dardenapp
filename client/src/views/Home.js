import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Menu from '../components/Hamburger-menu';
import '../styles/Home.scss';



const Home = (props) => {
    console.log('props in home', props)
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('https://darden-app.herokuapp.com/api/services')
            .then(res =>
                setServices(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="home">
            <NavBar />
            <Menu />
            <div className="home-center">
                <img className="banner" src="https://res.cloudinary.com/dfulxq7so/image/upload/v1578436889/asasdasd_ls3sll.png" alt="banner"/>
                {services.length > 0? 
                    <div className="services">
                        {services.map(service => {
                            return (
                                <div 
                                    key= {service.id}
                                    className="each-service" 
                                    onClick={() => {
                                    if (service.service_name == "Anything Else" || service.service_name == "Tutoring" )
                                    {
                                        props.history.push('/details')
                                    } else {
                                        props.history.push('/role')
                                    }
                                    localStorage.setItem('serviceId', service.id)
                                    }
                                    }>
                                    <div className="icon">
                                        <img id="cleaning-icon" src={service.service_icon} alt="icon"/>
                                </div>
                                <div className="text">
                                    <p>{service.service_name}</p>
                                </div>
                                </div>
                            )
                        })}
                    </div>
                : <div class="loader"></div>}
            </div>
        </div>
    )
                
}

export default Home;