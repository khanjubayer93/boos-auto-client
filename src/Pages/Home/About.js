import React from 'react';

const About = () => {
    return (
        <section style={{ backgroundImage: `url("https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg?w=2000")` }}>
            <div className='flex justify-between mx-20 mb-10 text-start'>
                <div className='w-1/2 mr-10 mt-20'>
                    <p className='uppercase text-red-500 text-sm mb-3 font-semibold'>Who we are
                    </p>
                    <h1 className='text-4xl font-extrabold'>Make your car shine from the inside out</h1>
                    <img className='rounded-full' src="" alt="" />
                </div>
                <div className='w-1/2 mt-20'>
                    <p className='font-semibold mb-10'>Dictumst arcu hac ultrices aptent tristique consectetuer. Faucibus facilisi interdum mollis sodales duis fames. Dictumst montes est letius tincidunt ut accumsan donec.</p>
                    <button className="bg-yellow-500 py-2 px-5 hover:bg-slate-500 hover:text-white">Discover more</button>
                </div>
            </div>
            <div className='flex justify-between gap-5 mx-20 mb-10'>
                <div className='w-1/3 bg-slate-100 p-5 grid justify-items-start mb-20'>
                    <img className='w-12' src="https://www.kindpng.com/picc/m/678-6786585_thumb-image-signo-de-comillas-png-transparent-png.png" alt="" />
                    <p className='text-start'>We’ve taken the hassle out of getting your car detailed without taking away the quality or results</p>
                    <p>Donald M. Dobso</p>
                </div>
                <div className='w-1/3 mb-20' >
                    <img className='w-full' src="https://automotive.spyrospanopoulos.com/wp-content/uploads/sites/5/2021/11/detail8.jpg" alt="" />
                </div>
                <div className='w-1/3 mb-20'>
                    <img src="https://img-ik.cars.co.za/news-site-za/images/2019/03/Bugatti-La_Voiture_Noire-2019-1600-05.jpg?tr=w-1200,h-800" alt="" />
                </div>
            </div>
       </section>
    );
};

export default About;