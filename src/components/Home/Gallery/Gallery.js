import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <h1 className="gallery-title">TOP ATTRACTIONS</h1>
        <div className="gallery container">
               
              <div  className="img">
                 <img height="300px" src="https://thefinancialexpress.com.bd/uploads/1595860222.jpg"alt=""/>

                 <div class="Photo-detail">
                    <h2>Cox's Bazar</h2>
                </div>

             </div>

              <div className="img">
                 <img height="300px" src="https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZGFyYmFuJTJDJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"alt=""/>

                 <div class="Photo-detail">
                    <h2>Sajek Valley</h2>
                </div>

             </div>

              <div className="img">
                 <img height="300px" src="https://thumbs.dreamstime.com/b/sundarban-natural-habitat-spotted-deer-one-most-beautiful-dear-world-flock-sundarbans-bangladesh-119549509.jpg"alt=""/>

                 <div class="Photo-detail">
                    <h2>Sundarban</h2>
                </div>

             </div>

              <div className="img">
                 <img height="300px" src="https://img.theepochtimes.com/assets/uploads/2014/11/28/Bangladesh_shutterstock_19582861_WEBONLY-674x420.jpg"alt=""/>

                 <div class="Photo-detail">
                    <h2>Saint Martin</h2>
                </div>

             </div>

              <div className="img">
                 <img height="300px" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Sunset_at_Kuakata_Sea_Beach.jpg"alt=""/>

                 <div class="Photo-detail">
                    <h2>Kuakata</h2>
                </div>

             </div>
              <div class="img">
                 <img height="300px" src="https://cdn.pixabay.com/photo/2020/06/14/12/56/suspension-bridge-5297744_960_720.jpg"alt=""/>

                 <div class="Photo-detail">
                    <h2>Zaflong</h2>
                </div>
                
             </div>
           </div>
        </div>
    );
};

export default Gallery;