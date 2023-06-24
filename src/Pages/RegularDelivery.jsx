/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

export default function RegularDelivery() {
    const { orders, setOrders } = useContext(AuthContext)
    return (
        <div>
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
                        orders?.filter(order => order.deliveryType === 'Regular').map(order => (
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
