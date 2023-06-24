/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function AllOrders() {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('/ordersInfo.json')
            .then(res => res.json())
            .then(data => setOrders(data))
        console.log(orders);
    }, [])
    return (
        <div>
            {/* create a table */ }
            <table className="table w-full">
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
        </div>
    )
}
