import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './views/Home';
import Details from './views/Details';
import Booking from './views/Booking';
import UserVerify from './views/UserVerify';
import Summary from './views/Summary';
import Checkout from './views/Checkout';
import Role from './views/Role';
import Servicing from './views/Servicing';

function App() {
  const [bookingInfo, setBookingInfo] = useState({})
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
                />
              )}}
        />
        <Route 
          exact path="/details" 
          render = {
            props => {
              return (
                <Details 
                  {...props}
                 
                />
              )}}
        />
         <Route 
          exact path="/role" 
          render = {
            props => {
              return (
                <Role 
                  {...props}
                 
                />
              )}}
        />
         <Route 
          exact path="/servicing" 
          render = {
            props => {
              return (
                <Servicing 
                  {...props}
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
                  bookingInfo = {bookingInfo}
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
                  bookingInfo = {bookingInfo}
                />
              )}}
        />
         <Route 
          exact path="/checkout" 
          render = {
            props => {
              return (
                <Checkout
                  {...props}
                  bookingInfo = {bookingInfo}
                />
              )}}
        />
      </Switch>
      
    </div>
  );
}

export default App;
