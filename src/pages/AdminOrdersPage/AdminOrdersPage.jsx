import React, { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './AdminOrdersPage.css'
import OrderCard from '../../components/OrderCard/OrderCard';


export default function AdminOrdersPage() {

    const [orders, setOrders] = useState([]);

    useEffect(function() {
        async function getPastOrders() {
          const orders = await ordersAPI.getAllOrders();
          setOrders(orders);
        }
        getPastOrders();
      }, []);

    return (
        <main className="AdminOrdersPage">
            <h1>All tree orders</h1>
            {orders.length ? 
                <div className="order-scroll">
                    {orders.map(o => <OrderCard order={o} key={o._id}/>)}
                </div>
                : 
                <h2>No orders yet</h2>
            }
        </main>
    );
}