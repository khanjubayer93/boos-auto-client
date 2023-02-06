import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-slate-700 text-center my-10'>Our Customers Reviews</h1>
            <div className='flex'>
                <div className='w-1/3'>
                    <img src="https://learn.g2.com/hubfs/appreviews.jpg" alt="" />
                </div>
                <div className="w-96 border-2 border-slate-500">
                    <div className="card-body">
                        <div className='flex'>
                            <div className='mr-3'>
                                <img className='rounded-full w-12 h-12' src="https://i2-prod.mirror.co.uk/incoming/article26678721.ece/ALTERNATES/s1200c/0_Mo-Salah-Liverpool.jpg" alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Salah</h2>
                                <p className='text-xs'>Egypt</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem eum architecto vel facilis. Architecto iste placeat ad amet aut dolores beatae hic consequuntur veniam odit, cum natus numquam voluptates id fuga rem voluptatem, sapiente enim provident dignissimos eius quae quis minus vitae. Temporibus quas doloremque optio cupiditate aspernatur quae quia.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;