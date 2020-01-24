import React from 'react';
import Geosuggest from 'react-geosuggest';
import '../styles/LocationField.css';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';


export class LocationField extends React.PureComponent {

    onSuggestSelect = (suggest) => {
        // console.log('suggest', suggest)
        // console.log('address')
        const {location: {lat, lng}, label} = suggest;
        const {form: {setValues, values}} = this.props;
        setValues({
            ...values,
            address: label,
            latitude: lat,
            longitude: lng
        })
        console.log('values', this.props)
    }


    render(){
        const {
            form: {values},
            
        } = this.props;

        const mapStyles = {
            width: '500px',
            height: '300px'
        }

        const google= window.google

        return (
            <div className="location">
                <div className="address">
                    <Geosuggest
                        placeholder="Your address"
                        onSuggestSelect={this.onSuggestSelect}
                        location={new google.maps.LatLng(53.558572, 9.9278215)}
                        radius="20" />
                    {/* <div>{values.latitude}</div>
                    <div>{values.longitude}</div> */}
                </div>
                <div className="map">
                    <Map
                        google={this.props.google}
                        zoom={8}
                        center={{
                            lat: values.latitude,
                            lng: values.longitude
                        }}
                        style={mapStyles}
                        initialCenter={{lat: 47.444, lng: -122.176}}
                    >
                        <Marker position={{lat: values.latitude, lng: values.longitude}} />
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA0xueWCAeNm6_94Jmgr3bI-XUVfXdKMOg'
})(LocationField);