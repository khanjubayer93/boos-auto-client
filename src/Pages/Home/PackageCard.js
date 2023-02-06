import React from 'react';
import { FaBan, FaCheckCircle,  } from 'react-icons/fa';


const PackageCard = () => {
    return (
        <div className='flex justify-between mx-20 gap-3'>
            <div className=" bg-slate-200 shadow-xl mb-16">
                <div className="card-body">
                    <div className='text-center'>
                        <h2 className="text-3xl font-semibold text-slate-700">Basic Package</h2>
                        <p className='mb-5'>Fringilla inceptos diam bibendum</p>
                        <p><span className='font-bold text-2xl mb-2'>$</span> <span className='font-extrabold text-6xl text-slate-700'>75</span><span className='text-2xl text-slate-500'>/Month</span></p>
                    </div>
                    <div>
                        <ul className='text-xs'>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' />Sociosqu dapibus consectetur sodales</li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' /> Ultrices nunc commodo orci
                            </li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' /> Laoreet elit eget conubia magnis
                            </li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaBan className='text-xl text-slate-700 mr-2' /> Consectetuer tempor inceptos ex
                            </li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaBan className='text-xl text-slate-700 mr-2' /> Vel ullamcorper nisl etiam habitant
                            </li>
                        </ul>
                    </div>
                    <div className=" text-center mt-5">
                        <button className="bg-yellow-500 py-2 px-5 hover:bg-slate-500 hover:text-white mb-2">Get Started</button>
                        <p className='text-xs'>Get Extra 10% off for Brand New Car</p>
                    </div>
                </div>
            </div>
            <div className=" bg-slate-200 shadow-xl mb-16">
                <div className="card-body">
                    <div className='text-center'>
                        <h2 className="text-3xl font-semibold text-slate-700">Basic Package</h2>
                        <p className='mb-5'>Fringilla inceptos diam bibendum</p>
                        <p><span className='font-bold text-2xl mb-2'>$</span> <span className='font-extrabold text-6xl text-slate-700'>125</span><span className='text-2xl text-slate-500'>/Month</span></p>
                    </div>
                    <div>
                        <ul className='text-xs'>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' />Sociosqu dapibus consectetur sodales</li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' /> Ultrices nunc commodo orci
                            </li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' /> Laoreet elit eget conubia magnis
                            </li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' /> Consectetuer tempor inceptos ex
                            </li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaBan className='text-xl text-slate-700 mr-2' /> Vel ullamcorper nisl etiam habitant
                            </li>
                        </ul>
                    </div>
                    <div className=" text-center mt-5">
                        <button className="bg-yellow-500 py-2 px-5 hover:bg-slate-500 hover:text-white mb-2">Get Started</button>
                        <p className='text-xs'>Get Extra 10% off for Brand New Car</p>
                    </div>
                </div>
            </div>
            <div className=" bg-slate-200 shadow-xl mb-16">
                <div className="card-body">
                    <div className='text-center'>
                        <h2 className="text-3xl font-semibold text-slate-700">Basic Package</h2>
                        <p className='mb-5'>Fringilla inceptos diam bibendum</p>
                        <p><span className='font-bold text-2xl mb-2'>$</span> <span className='font-extrabold text-6xl text-slate-700'>225</span><span className='text-2xl text-slate-500'>/Month</span></p>
                    </div>
                    <div>
                        <ul className='text-xs'>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' />Sociosqu dapibus consectetur sodales</li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' /> Ultrices nunc commodo orci
                            </li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' /> Laoreet elit eget conubia magnis
                            </li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' /> Consectetuer tempor inceptos ex
                            </li>
                            <div className="divider"></div>
                            <li className='flex items-center'><FaCheckCircle className='text-xl text-slate-700 mr-2' /> Vel ullamcorper nisl etiam habitant
                            </li>
                        </ul>
                    </div>
                    <div className=" text-center mt-5">
                        <button className="bg-yellow-500 py-2 px-5 hover:bg-slate-500 hover:text-white mb-2">Get Started</button>
                        <p className='text-xs'>Get Extra 10% off for Brand New Car</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;