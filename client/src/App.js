import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './views/Home';
import Booking from './views/Booking';
import UserVerify from './views/UserVerify';
import Summary from './views/Summary';

function App() {
  const [serviceChosen, setServiceChosen] = useState({})
  const [bookingInfo, setBookingInfo] = useState({})
  console.log('check', serviceChosen)
  console.log('bookingInfo', bookingInfo)

  return (
    <div className="App">
      <Switch>
        <Route 
          exact path="/" 
          render = {
            props => {
              return (
                <Home 
                  {...props}
                  setServiceChosen={setServiceChosen}
                />
              )}}
        />
        <Route 
          exact path="/booking" 
          render = {
            props => {
              return (
                <Booking 
                  {...props}
                  serviceChosen={serviceChosen}
                  setBookingInfo = {setBookingInfo}
                />
              )}}
        />
        <Route 
          exact path="/verify" 
          render = {
            props => {
              return (
                <UserVerify 
                  {...props}
                />
              )}}
        />
        <Route 
          exact path="/summary" 
          render = {
            props => {
              return (
                <Summary
                  {...props}
                />
              )}}
        />
      </Switch>
      
    </div>
  );
}

export default App;
