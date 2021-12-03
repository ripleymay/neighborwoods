import React, { useState, useEffect } from 'react';
import OrderAddyForm from '../../components/OrderAddyForm/OrderAddyForm';
import GoogleMapWidget from '../../components/GoogleMapWidget/GoogleMapWidget';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';

export default function NewOrderPage({ user }) {

    const [address, setAddress] = useState('');
    const [isAddyValid, setIsAddyValid] = useState(false);

    return (
        <main className="NewOrderPage">
            < OrderAddyForm />
            < GoogleMapWidget />
        </main>
    );
}

