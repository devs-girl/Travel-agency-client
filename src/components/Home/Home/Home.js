import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Free from '../Free/Free';
import Gallery from '../Gallery/Gallery';
import Places from '../Places/Places';
import Services from '../Services/Services'

 

 

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Brand></Brand>
            <Places></Places>
            <Services></Services>
            <Gallery></Gallery>
            <Free></Free>
            
        </div>
    );
};

export default Home;