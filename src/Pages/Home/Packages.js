import React from 'react';
import PackageCard from './PackageCard';

const Packages = () => {
    return (
        <div style={{ backgroundImage: `url("https://img.freepik.com/free-vector/3d-perspective-style-diamond-shape-white-background_1017-27556.jpg?w=2000")` }}>
            <div className='text-center mb-10'>
                <p className='font-bold text-yellow-400 mb-5'>Our pricing</p>
                <h1 className='text-5xl font-semibold text-slate-800'>Vehicle Type Packages</h1>
            </div>
            <div>
                
            </div>
            <div className=''>
                <PackageCard></PackageCard>
            </div>
        </div>
    );
};

export default Packages;