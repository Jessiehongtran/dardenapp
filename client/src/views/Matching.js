import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../styles/Matching.scss'

const Matching = (props) => {
    const [clientRequest, setClientRequest] = useState({});
    const [dardies, setDardies] = useState([])

    const matches = []
    const bestMatchArr = []
    const veryBestMatchArr = []

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

    // To find distance
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

    // To find time duration
    const duration = (formatedTime1, formatedTime2) => {
        const time1 = new Date(formatedTime1)
        const time2 = new Date(formatedTime2)
        const yearGap = Math.abs(time1.getFullYear() - time2.getFullYear())
        const monthGap = Math.abs(time1.getMonth() - time2.getMonth())
        const dateGap = Math.abs(time1.getDate() - time2.getDate())
        const hourGap = Math.abs(time1.getHours() - time2.getHours())
        const minGap = Math.abs(time1.getMinutes() - time2.getMinutes())
        const secGap = Math.abs(time1.getSeconds() - time2.getSeconds())
        console.log('duration', yearGap*365*24*60*60 + monthGap*30*24*60*60 + dateGap*24*60*60 + hourGap*60*60 + minGap*60 + secGap)
        return yearGap*365*24*60*60 + monthGap*30*24*60*60 + dateGap*24*60*60 + hourGap*60*60 + minGap*60 + secGap

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
        let closestDuration = duration(matches[0].created_at, clientRequest.created_at)
        let veryBestMatch = matches[0]
        for (let i=1; i<matches.length; i++){
           if (distance(matches[i].latitude, matches[i].longitude, clientRequest.latitude, clientRequest.longitude, "N") <= closestDist){
                closestDist = distance(matches[i].latitude, matches[i].longitude, clientRequest.latitude, clientRequest.longitude, "N")
                bestMatch = matches[i]

                // GET best matches if same service, close distance and closest time duration
                if (duration(matches[i].created_at, clientRequest.created_at)< closestDuration){
                    closestDuration = duration(matches[i].created_at, clientRequest.created_at)
                    veryBestMatch = matches[i]

                }
            }
                
        }
        bestMatchArr.push(bestMatch)
        veryBestMatchArr.push(veryBestMatch)
    }

    else {
        return (
            <div className="no-match">
                <h2>:(</h2>
                <h3>We have not found any dardie matching with your request at this moment, our team will be in touch with you.</h3>
                <Link to="/" className="link-to">Home</Link>
            </div>
        )
    }
    
    console.log('matches', matches)
    console.log('bestMatchArr', bestMatchArr)
    console.log('veryBestMatchArr', veryBestMatchArr)

    return (
        <div>
            <div className="match">
                <p className="title">Best match</p>
                <h2>We found a dardie close to you</h2>
                <p>Name: {bestMatchArr[0].name}</p>
                <p>Address: {bestMatchArr[0].address}</p>
                <p className="note">Our team will connect them with you</p>
                <button
                className="proceed-btn"
                onClick={() => props.history.push('/checkout')}
                >
                Proceed
            </button>
            </div>
            <div className="match">
                <p className="title">Very best match</p>
                <h2>We found a dardie close to you and have been active recently</h2>
                <p>Name: {veryBestMatchArr[0].name}</p>
                <p>Address: {veryBestMatchArr[0].address}</p>
                <p className="note">Our team will connect them with you</p>
                <button
                className="proceed-btn"
                onClick={() => props.history.push('/checkout')}
                >
                Proceed 
            </button>
            </div>
        </div>
    )
    
}

export default Matching;