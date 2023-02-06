import React, { useEffect, useState } from 'react';

const OrderTable = ({ ord, handleDelete, handleUpdatedDoc }) => {
    const { title, price, _id, carName, product, status } = ord;
    const [carProduct, setCarProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${product}`)
            .then(res => res.json())
            .then(data => {
                setCarProduct(data)
                console.log(data)
            })
    }, [product]);



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                carProduct?.image &&
                                <img src={carProduct?.image} />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>

                    </div>
                </div>
            </td>
            <td>
                ${price}
                <br />

            </td>
            <td>{carName}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{_id}</button>
            </th>
            <th>
                <button onClick={() => handleUpdatedDoc(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending...'}</button>
            </th>
        </tr>
    );
};

export default OrderTable;