import React, { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './AdminOrdersPage.css'
import OrderCard from '../../components/OrderCard/OrderCard';


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
                        </tr>
                        {orders.map(o =>
                            <tr>
                                <td>{o.status}</td>
                                <td>{o.address}</td>
                                <td>{o.user.name}</td>
                                <td>{o.user.email}</td>
                                <td>{o.user.phone}</td>
                                <td>{o.lat}</td>
                                <td>{o.lng}</td>
                                <td>{o.trees.map(t => t.name + ' ')}</td>
                                <td>{new Date(o.updatedAt).toLocaleDateString()}</td>
                            </tr>
                        )}
                    </table>                
                </div>
                : 
                <h2>No orders yet</h2>
            }
        </main>
    );
}