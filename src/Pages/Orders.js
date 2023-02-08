import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';
import OrderTable from './OrderTable';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('boosToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                console.log(data)
            })
    }, [user?.email]);

    const handleDelete = (id) => {
        const agrre = window.confirm('Do you want to delete this item?')
        if (agrre) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = order.filter(ord => ord._id !== id)
                        setOrder(remaining)
                        toast.success('This item successfully deleted')
                    }
                })
        }
    }

    const handleUpdatedDoc = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = order.filter(ord => ord._id !== id)
                    const approving = order.find(ord => ord._id === id);
                    approving.status = 'Approved';

                    const newOrder = [approving, ...remaining];
                    setOrder(newOrder)
                }
            })
    }
    return (
        <div>
            <h1>Total order is {order.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Product Name</th>
                            <th>Product ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(ord => <OrderTable
                                key={ord._id}
                                ord={ord}
                                handleDelete={handleDelete}
                                handleUpdatedDoc={handleUpdatedDoc}
                            ></OrderTable>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Orders;