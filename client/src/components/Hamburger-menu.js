import React, { useState } from "react";
import "../styles/Hamburger-menu.scss";
import { Redirect, NavLink } from "react-router-dom";

const Menu = props => {
  const openNav = () => {
    document.getElementById("myNav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  const logout = () => {
    localStorage.removeItem("token");
    return <Redirect to="/" />;
  };

  return (
    <div>
      <div className="hamburger-menu" onClick={openNav}>
        <span style={{ backgroundColor: "#082B84" }}></span>
        <span style={{ backgroundColor: "#082B84" }}></span>
        <span style={{ backgroundColor: "#082B84" }}></span>
      </div>
      <div id="myNav" className="overlay" onClick={closeNav}>
        <NavLink
          to="javascript:void(0)"
          className="closebtn"
          onClick={closeNav}
        ></NavLink>
        <div className="intro">
          <img
            className="avatar"
            src="https://res.cloudinary.com/dfulxq7so/image/upload/v1578598566/3ca14bfe2471e504eb115db7a2ff9a91_ll041q.jpg"
            alt="avatar"
          />
          <p className="name">Rodrigo Perez</p>
          <span className="span"></span>
        </div>
        <div className="overlay-content-map">
          <div class="eachNav">
            <NavLink to="/dashboard">Recent orders</NavLink>
          </div>
          <div className="eachNav">
            <NavLink to="/overview">Resources</NavLink>
          </div>
          <div className="eachNav">
            <NavLink onClick={logout} to="/">
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;