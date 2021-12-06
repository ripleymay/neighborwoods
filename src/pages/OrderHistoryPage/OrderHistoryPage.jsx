import React, { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';
import OrderCard from '../../components/OrderCard/OrderCard';


export default function OrderHistoryPage({ user }) {

    const [orders, setOrders] = useState([]);

    useEffect(function() {
        async function getPastOrders() {
          const orders = await ordersAPI.getOrders();
          setOrders(orders);
        }
        getPastOrders();
      }, []);

    return (
        <main className="OrderHistoryPage">
            <h1>Your tree orders</h1>
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