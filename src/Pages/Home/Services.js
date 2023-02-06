import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data)
                console.log(data);
            })
    }, [])
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='text-end'>
                    <p className='font-bold text-yellow-500 uppercase'>Our Services</p>
                    <h1 className='text-4xl font-bold text-slate-700'>Service We Provide</h1>
                </div>
                <div className="divider lg:divider-horizontal text-6xl">|</div>
                <button className="bg-yellow-500 py-2 px-5 hover:bg-slate-500 hover:text-white uppercase">View all services</button>
            </div>
            <div className='grid grid-cols-3 gap-5 mx-20'>
                {
                    cars?.map(car => <ServiceCard
                        key={car._id}
                        car={car}
                    >
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;