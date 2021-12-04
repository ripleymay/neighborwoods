import React, { useState } from 'react';
import GoogleMapWidget from '../../components/GoogleMapWidget/GoogleMapWidget';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';

export default function NewOrderPage({ user }) {

    const [addy, setAddy] = useState('');
    const [addyMatches, setAddyMatches] = useState([]);
    const [isAddyValid, setIsAddyValid] = useState(false);
    const [latLng, setLatLng] = useState({
        lat: null,
        lng: null
    });

    function handleChange(evt) {
        const newAddy = evt.target.value;
        setAddy(newAddy);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const results = await ordersAPI.getMatchingAddys(addy);
        setAddyMatches(results.predictions);
    }  

    async function handleSelect(evt) {
        handleChange(evt);        
        setIsAddyValid(true);
        const results = await ordersAPI.getLatLng(addy);
        setLatLng({
            lat: results.results[0].geometry.location.lat, 
            lng: results.results[0].geometry.location.lng
        });
    }

    return (
        <main className="NewOrderPage">
            { !isAddyValid ?
                <div>
                    <h2>Tell us your address</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={handleChange} value={addy} required />
                        <button type="submit" value="submit">🔎</button>
                    </form>
                    {addyMatches.length ? <div>
                        {addyMatches.map((a) => (
                            <div>
                                <button onClick={handleSelect} value={a.description}>{a.description}</button>
                            </div>
                        ))}
                    </div> :
                        <p>No matching addresses</p>}
                </div>
            :
            <div>
                <p>Order Address: {addy}</p>
                <p>Lat: {latLng.lat} Long: {latLng.lng}</p>
                < GoogleMapWidget latLng={latLng}/>
            </div>
            }
        </main>
    );
}

