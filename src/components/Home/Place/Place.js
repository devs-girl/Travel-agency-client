import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = ({place}) => {
    const {_id,name, description, img, offer} = place;
    return (
        <div>
            <div>
            <div className="service">
            <img className="place-image" src={img} alt="" />
           <h3 className="name py-2">{name}</h3> 
           <p className=" description px-4">{description.slice(0,55)}</p>
           <h6>{offer}</h6>
          <Link to={`/placeorder/${_id}`}>
           <button  className="btn-regular text-light py-2 my-2">Book Now</button>
           </Link>
        </div>
       </div>
        </div>
    );
};

export default Place;