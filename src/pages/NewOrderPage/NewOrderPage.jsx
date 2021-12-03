import React, { useState } from 'react';
import GoogleMapWidget from '../../components/GoogleMapWidget/GoogleMapWidget';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';

export default function NewOrderPage({ user }) {

    const [addy, setAddy] = useState('');
    const [addresses, setAddresses] = useState([]);
    // const [isAddyValid, setIsAddyValid] = useState(false);

    function handleChange(evt) {
        const newAddy = evt.target.value;
        setAddy(newAddy);
    }
  
      async function handleSubmit(evt) {
        evt.preventDefault();
        const results = await ordersAPI.getAddyRecs(addy);
        setAddresses(results.predictions);
    }
   

    return (
        <main className="NewOrderPage">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={addy} required />
                <button type="submit" value="submit">
                    Search
                </button>
            </form>
            { addresses.length ? <div>
                {addresses.map((a) => (
                        <div>
                            <p>{a.description}</p>
                        </div>
                ))}
            </div> : 
            <p>No results</p>}
            < GoogleMapWidget />
        </main>
    );
}

