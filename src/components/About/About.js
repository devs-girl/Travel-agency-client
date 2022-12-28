import React from 'react';
import'./About.css'

const About = () => {
    return (
        <div className="container">
            <h1 style={{textAlign:'center'}} className="gallery-title">About Us</h1>
          <div className="about">
              <div>
                  <img src="https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/shutterstock_777102832_(1).jpg&w=500&h=400" alt="" />
              </div>
          <div className="px-4 mx-4">
               <p className="area px-4 mx-4">
                Welcome to our website.This web site was created to inform you about the tourist area and our resorts   there.
                This is very important for those who like to travel.We have resorts in different parts of Bangladesh.
                Here are the pictures of the most popular exhibition place.So that travel lovers can see the place of their choice
                can buy our package.In order to make it easier for the customers to buy the package on our website, we have attracted the attention of tourists with pictures of Cox's Bazar, Sajak etc.
               <br />
               <br />
               Tourism involves travel and stay, can also include day trips, business trips, etc. There is a movement of tourists from the place of origin to the destination. ... Tourism also involves a journey and services like transport, accommodation, catering, and viewing, etc.
             </p>
           </div>
           
          </div>
        </div>
    );
};

export default About;