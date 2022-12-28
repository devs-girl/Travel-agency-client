import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    // const {service} = props;
    const {id, name, description, img}= service;
    return (
       <div>
            <div className="service">
            <img className="service-image" height="200" width="100%" src={img} alt="" />
           <h3 className="name py-4">{name}</h3> 
           <p className=" description px-4">{description.slice(0,80)}</p>
          <Link to={`/detail/${id}`}>
           <button className="btn-regular text-light">Learn More</button>
           </Link>
        </div>
       </div>
    );
};

export default Service;