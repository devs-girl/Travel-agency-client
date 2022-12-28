import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css'

const Places = () => {
    const [places, setPlaces] = useState([]);
    useEffect(()=> {
        fetch('/resort.json')
        .then(res => res.json())
        .then(data => setPlaces(data));
    }, [])
    return (
        <div>
            <h1 className="gallery-title " >Our Resorts</h1>
        <div className="place-container">
           
           {
               places.map(place =><Place
               key = {place.name}
               place = {place}
               ></Place>)
           }
            
        </div>
        </div>
    );
};

export default Places;