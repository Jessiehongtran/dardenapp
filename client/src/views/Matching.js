import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Matching = () => {
    const [clientRequest, setClientRequest] = useState({});
    const [dardies, setDardies] = useState([])

    const matches = []
    const bestMatchArr = []

    const requestId = localStorage.getItem('requestId')
    const serviceId = localStorage.getItem('serviceId')

    useEffect(() => {
        axios.get(`https://darden-app.herokuapp.com/api/dardies/serviceId/${serviceId}`)
             .then(res => {
                console.log('dardies', res.data)
                 setDardies(res.data)
             })
             .catch(err => {
                 console.log(err.message)
             })
        axios.get(`https://darden-app.herokuapp.com/api/requests/${requestId}`)
             .then(res => {
                console.log('clientRequest', res.data)
                 setClientRequest(res.data)
             })
             .catch(err => {
                 console.log(err.message)
             })
             
    }, [])

    console.log(dardies)

    // To find closest distance
    const distance = (lat1, lon1, lat2, lon2, unit) => {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist;
        }
    }
    
    // GET matches if same service 
    for (let i=0; i<dardies.length; i++){
        console.log(i)
        if (dardies[i].service_id == clientRequest.id){
                matches.push(dardies[i])
        }
            
    }

    // GET best matches if same service and closest distance
    if (matches.length > 0){
        let closestDist = distance(matches[0].latitude, matches[0].longitude, clientRequest.latitude, clientRequest.longitude, "N")
        let bestMatch = matches[0]
        for (let i=1; i<matches.length; i++){
            if (matches[i].service_id == clientRequest.id){
                    if (distance(matches[i].latitude, matches[i].longitude, clientRequest.latitude, clientRequest.longitude, "N") < closestDist){
                        closestDist = distance(matches[i].latitude, matches[i].longitude, clientRequest.latitude, clientRequest.longitude, "N")
                        bestMatch = matches[i]
                    }
                }
        }
        bestMatchArr.push(bestMatch)
    }
    

    
    console.log('matches', matches)
    console.log('bestMatchArr', bestMatchArr)

    return (
        <div></div>
    )
    
}

export default Matching;