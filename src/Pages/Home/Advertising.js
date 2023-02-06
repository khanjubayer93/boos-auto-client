import React from 'react';

const Advertising = () => {
    return (
        <div className="hero h-[32rem]" style={{ backgroundImage: `url("https://picolio.auto123.com/auto123-media/2020CorvetteSingrayReveal018.JPG")` }}>
            <div className="hero-overlay bg-opacity-0 bg-gradient-to-r from-black"></div>
            <div className="flex justify-start hero-content text-neutral-content">
                <div className="text-start w-1/3">
                    <h1 className="mb-5 text-4xl font-bold">Keep it fresh and clean with premium detailing services</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="bg-yellow-500 py-2 px-5 hover:bg-slate-500 hover:text-white">Discover more</button>
                </div>
            </div>
        </div>
    );
};

export default Advertising;