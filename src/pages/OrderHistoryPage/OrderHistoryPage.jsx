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
            <h1 className="page-title">Your tree orders</h1>
            <p>Have a question about the status or contents of an order? Give us a call at 512-443-5323
                or shoot us an email at neighborwoods@treefolks.org.</p>
            <hr />
            {orders.length ? 
                <div className="order-scroll">
                    <div className="order-cards">{orders.map(o => <OrderCard order={o} key={o._id}/>)}</div>
                    <div className="scroll-down"></div>
                </div>
                : 
                <h2>No orders yet</h2>
            }
        </main>
    );
}