import React from 'react';
import About from './About';
import Advertising from './Advertising';
import Banner from './Banner';
import Details from './Details';
import Packages from './Packages';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Details></Details>
            <Services></Services>
            <Advertising></Advertising>
            <Packages></Packages>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;