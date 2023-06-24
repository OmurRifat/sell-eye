/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function AllOrders() {
    const [page, setPage] = useState(0)
    const [count, setCount] = useState(1)

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('/ordersInfo.json')
            .then(res => res.json())
            .then(data => {
                setCount(Math.ceil(data.length / 5));
                setOrders(data.slice(page * 5, page * 5 + 5))
            })
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
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(order => (
                            <tr className=' hover:bg-slate-700' key={ order.orderId }>
                                <td>{ order.orderId }</td>
                                <td>{ order.customerName }</td>
                                <td>{ order.deliveryAddress }</td>
                                <td>{ order.customerPhone }</td>
                                <td>{ order.orderDate }</td>
                                <td>{ order.deliveryDate }</td>
                                <td>{ order.deliveryType }</td>
                                <td>{ order.orderStatus }</td>
                                <td>{ parseInt(order.orderTotal) }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="text-center mt-6">
                {
                    [...Array(count).keys()].map(number => <button
                        key={ number }
                        className={ page === number ? ' bg-red-500 p-3 rounded-lg font-bold focus:outline-none' : ' bg-gray-400 text-black p-3 mx-1 rounded-lg font-bold' }
                        onClick={ () => setPage(number) }
                    >
                        { number + 1 }
                    </button>)
                }
            </div>
        </div>
    )
}
