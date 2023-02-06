import React from 'react';

const Details = () => {
    return (
        <div className='flex justify-between mx-20 my-10'>
            <div className='flex items-center'>
                <p className='font-extrabold text-6xl text-yellow-400'>15+</p>
                <div className="divider divider-horizontal"></div> 
                <p>Years of Experience</p>
            </div>
            <div className='flex items-center'>
                <p className='font-extrabold text-6xl text-yellow-400'>23+</p>
                <div className="divider divider-horizontal"></div> 
                <p>Corporate Partner</p>
            </div>
            <div className='flex items-center'>
                <p className='font-extrabold text-6xl text-yellow-400'>17k</p>
                <div className="divider divider-horizontal"></div> 
                <p>Car Detailing</p>
            </div>
            <div className='flex items-center'>
                <p className='font-extrabold text-6xl text-yellow-400'>40+</p>
                <div className="divider divider-horizontal"></div> 
                <p>Years of Experience</p>
            </div>
            
        </div>
    );
};

export default Details;