import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Checkout = () => {
    const { title, _id, price } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handleCheckoutForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unknown User';
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(name, email, phone, message)

        const order = {
            product: _id,
            customer: name,
            carName: title,
            price,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Order placed successfully')
                    form.reset();
                }
                console.log(data)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='flex justify-center'>
            <div className=''>
                <h2 className='text-4xl text-slate-700'>Checkout Page</h2>
                <p>{title}</p>
                <form onSubmit={handleCheckoutForm} className='my-20'>
                    <input name='firstName' type="text" placeholder="First name" className="input input-bordered input-warning w-full mb-5" />
                    <br />
                    <input name='lastName' type="text" placeholder="Last name" className="input input-bordered input-warning w-full  mb-5" />
                    <br />
                    <input name='email' type="email" placeholder="Email" className="input input-bordered input-warning w-full  mb-5" defaultValue={user?.email} readOnly />
                    <br />
                    <input name='phone' type="phone" placeholder="Phone" className="input input-bordered input-warning w-full mb-5" />
                    <br />
                    <textarea name='message' className="textarea textarea-warning " placeholder="Bio"></textarea>
                    <br />
                    <button className="bg-yellow-500 py-2 px-5 hover:bg-slate-500 hover:text-white uppercase mt-3">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;

