import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact container my-4 py-4">
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Contact</h6>
                          
                            <p><i className="fas fa-home mr-3"></i> Dhaka, Gulshan 1212, Bangladesh</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@love_travel.com</p>
                            <p><i className="fas fa-phone mr-3"></i> +880 199 999 888</p>
                            <p><i className="fas fa-print mr-3"></i> +880 199 999 888</p>
                        </div>

                        <div>
                            <img width="60%" src="https://www.iphonelife.com/sites/iphonelife.com/files/Screen%20Shot%202015-06-01%20at%207.40.16%20AM.png" alt="" />
                            </div>            
                
            
        </div>
    );
};

export default Contact;