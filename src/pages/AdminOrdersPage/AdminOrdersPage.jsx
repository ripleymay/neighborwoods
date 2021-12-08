import React, { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderListItem from '../../components/OrderLineItem/OrderLineItem';
import './AdminOrdersPage.css'

export default function AdminOrdersPage() {

    const [orders, setOrders] = useState([]);

    useEffect(function() {
        async function getOrders() {
          const orders = await ordersAPI.getAllOrders();
          setOrders(orders);
        }
        getOrders();
      }, []);

    return (
        <main className="AdminOrdersPage">
            <h1>All tree orders</h1>
            {orders.length ? 
                <div className="order-scroll">
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Address</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Lat</th>
                                <th>Long</th>
                                <th>Trees</th>
                                <th>Created</th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(o => <OrderListItem order={o} setOrders={setOrders} key={o._id} />)}
                        </tbody>
                    </table>                
                </div>
                : 
                <h2>No orders yet</h2>
            }
        </main>
    );
}