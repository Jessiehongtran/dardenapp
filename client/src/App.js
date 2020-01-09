import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './views/Home';
import Booking from './views/Booking';

function App() {
  const [serviceChosen, setServiceChosen] = useState({})
  console.log('check', serviceChosen)

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
                />
              )}}
        />
      </Switch>
      
    </div>
  );
}

export default App;
