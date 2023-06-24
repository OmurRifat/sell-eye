/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

export default function AllOrders() {
    // const { orders, setOrders } = useContext(AuthContext)
    const [page, setPage] = useState(0)
    const [count, setCount] = useState(0)

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('/ordersInfo.json')
            .then(res => res.json())
            .then(data => {
                setCount((data.length / 5));
                switch (page) {
                    case 0:
                        setOrders(data.slice(0, 5))
                        break;
                    case 1:
                        setOrders(data.slice(5, 10))
                        break;
                    case 2:
                        setOrders(data.slice(10, 15))
                        break;
                    case 3:
                        setOrders(data.slice(15, 20))
                        break;
                    case 4:
                        setOrders(data.slice(20, 25))
                        break;
                    default:
                        setOrders(data.slice(0, 5))
                        break;
                }
            })
        console.log(page);
    }, [page])
    return (
        <div className=' '>
            {/* create a table */ }
            <table className="table w-full bg-tertiary bg-opacity-30">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Delivery Address</th>
                        <th>Customer Phone</th>
                        <th>Order Date</th>
                        <th>Delivery Date</th>
                        <th>Delivery Type</th>
                        <th>Order Status</th>
                        <th>Order Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(order => (
                            <tr key={ order.orderId }>
                                <td>{ order.orderId }</td>
                                <td>{ order.customerName }</td>
                                <td>{ order.deliveryAddress }</td>
                                <td>{ order.customerPhone }</td>
                                <td>{ order.orderDate }</td>
                                <td>{ order.deliveryDate }</td>
                                <td>{ order.deliveryType }</td>
                                <td>{ order.orderStatus }</td>
                                <td>{ parseInt(order.orderTotal) }</td>
                                <td>
                                    <button className="btn btn-sm btn-primary">Details</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="text-center mt-6">
                {
                    [...Array(count).keys()].map(number => <button
                        key={ number }
                        className={ page == number ? ' bg-red-500 p-3 rounded-lg font-bold focus:outline-none' : ' bg-gray-400 text-black p-3 mx-1 rounded-lg font-bold' }
                        onClick={ () => setPage(number) }
                    >
                        { number + 1 }
                    </button>)
                }
            </div>
        </div>
    )
}
