import React, {useState} from "react";
import * as ordersAPI from '../../utilities/orders-api';

export default function OrderLineItem({order}) {

    const [status, setStatus] = useState(order.status);
    const [orderInfo, setOrderInfo] = useState(order);

    async function changeStatus() {
        // const order = await ordersAPI.updateStatus(tree._id);
        // setOrderInfo(newTree.isAvailable);
    }

    // function handleChange(evt) {
    //     setTreeInfo({ ...treeInfo, [evt.target.name]: evt.target.value });
    // }

    // async function handleSubmit() {
    //     const updatedTree = await treesAPI.update(tree._id, treeInfo);
    //     setTreeInfo(updatedTree);
    //     setShowEdit(false);
    // }

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
        </tr>
    );
  }