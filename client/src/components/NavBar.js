import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.scss'

const NavBar = () => {


    return (
        <div className="navBar">
            <h1 className="name">
                DarDen.
            </h1>
            <Link to="">
                <p>Account</p>
            </Link>
        </div>
    )
}

export default NavBar;