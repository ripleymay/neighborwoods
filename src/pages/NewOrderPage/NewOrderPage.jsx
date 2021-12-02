import React, { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';

export default function NewOrderPage({ user }) {

    const [formData, setFormData] = useState({});

    return (
        <main className="NewOrderPage">
            <form>
                <input></input>
            </form>
        </main>
    );
}