import React, {useState} from "react";
import * as ordersAPI from '../../utilities/orders-api';

export default function OrderLineItem({order, setOrders}) {

    const [status, setStatus] = useState(order.status);

    async function changeStatus() {
        // const order = await ordersAPI.updateStatus(tree._id);
        // setOrderInfo(newTree.isAvailable);
    }

    async function handleDelete() {
        const newOrders = await ordersAPI.deleteOrder(order._id);
        setOrders(newOrders);
    }

    return (
        <tr>
            <td>
                <select onChange={changeStatus}>
                    <option>Submitted</option>
                    <option>Approved</option>
                    <option>Delivered</option>
                </select>
            </td>
            <td>{order.address}</td>
            <td>{order.user.name}</td>
            <td>{order.user.email}</td>
            <td>{order.user.phone}</td>
            <td>{order.lat}</td>
            <td>{order.lng}</td>
            <td>{order.trees.map(t => t.name )}</td>
            <td>{new Date(order.updatedAt).toLocaleDateString()}</td>
            <td><button onClick={handleDelete}>X</button></td>
        </tr>
    );
  }