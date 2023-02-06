import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ car }) => {
    const { image, title, price,_id } = car;
    return (
        <div className="bg-base-100 shadow-xl" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg?w=2000")` }}>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                        <button className="bg-yellow-500 py-2 px-5 hover:bg-slate-500 hover:text-white uppercase">Book now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;