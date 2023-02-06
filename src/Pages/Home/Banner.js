import React from 'react';
import Header from '../Header';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen banner-image" style={{ backgroundImage: `url("https://www.carscoops.com/wp-content/uploads/2021/11/SP-Automotive-Chaos-8.jpg")` }}>
                
                <div className="hero-overlay bg-opacity-0">
                </div>
                <div className="hero-content text-neutral-content grid justify-items-start">
                    <div className="w-1/3 text-start">
                        <h1 className="mb-5 text-6xl font-bold items-start">Save Your <br /> Money And <br /> Time</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="bg-yellow-500 py-2 px-5 hover:bg-slate-500 hover:text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;