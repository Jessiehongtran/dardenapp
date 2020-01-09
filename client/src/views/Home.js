import React from 'react';
import NavBar from '../components/NavBar';
import Menu from '../components/Hamburger-menu';
import '../styles/Home.scss';
import {serviceCategories} from '../data/serviceCategory';


const Home = (props) => {

    return (
        <div className="home">
            <NavBar />
            <Menu />
            <div className="home-center">
                <img className="banner" src="https://res.cloudinary.com/dfulxq7so/image/upload/v1578436889/asasdasd_ls3sll.png" alt="banner"/>
                <div className="services">
                    {serviceCategories.map(service => {
                        return (
                            <div 
                                className="each-service" 
                                onClick={() => {
                                props.history.push('/booking')
                                props.setServiceChosen(service)
                                }
                                }>
                                <div className="icon">
                                    <img id="cleaning-icon" src={service.icon} alt="icon"/>
                            </div>
                            <div className="text">
                                <p>{service.name}</p>
                            </div>
                    </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;