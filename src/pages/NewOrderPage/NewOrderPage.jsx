import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleMapWidget from '../../components/GoogleMapWidget/GoogleMapWidget';
import TreeButton from '../../components/TreeButton/TreeButton';
import * as ordersAPI from '../../utilities/orders-api';
import * as treesAPI from '../../utilities/trees-api';
import './NewOrderPage.css';

export default function NewOrderPage({ user }) {

    const [addy, setAddy] = useState('');
    const [addyMatches, setAddyMatches] = useState([]);
    const [isAddyValid, setIsAddyValid] = useState(false);
    const [error, setError] = useState('');
    const [coords, setCoords] = useState({
        lat: null,
        lng: null
    });
    const [trees, setTrees] = useState([]);
    const treesRef = useRef();
    const navigate = useNavigate();

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
    }

    function handleAdd(tree) {
        setTrees([...trees, tree]);
    }

    function handleSub(tree) {
        trees.splice(trees.findIndex(t => t.name === tree.name), 1);
        setTrees(trees);
    }

    async function handleFinalize() {
        await ordersAPI.createOrder({ addy, coords, trees });
        navigate('/orders');
    }

    useEffect(function() {
        async function getTrees() {
          const trees = await treesAPI.getAvail();
          const sortedTrees = trees.reduce((res, t) => {
              res[t.stature] = res[t.stature] || [];
              res[t.stature].push(t);
              return res;
          }, {});
          treesRef.current = sortedTrees;
        }
        getTrees();
      }, []);

    useEffect(function () {
        async function isValid() {
            // const isDuplicate = await ordersAPI.checkDupes(addy);
            // if (isDuplicate) return setError('Sorry! Theres already an order for that address placed within the last year. If you think this is a mistake, please call us.');
            const results = await ordersAPI.getLatLng(addy);
            setCoords({
                lat: results.results[0].geometry.location.lat,
                lng: results.results[0].geometry.location.lng
            });
        }
        if (isAddyValid) isValid();
    }, [addy, isAddyValid]);

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
                        {addyMatches.map((a, idx) => (
                            <button key={idx} onClick={handleSelect} value={a.description}>{a.description}</button>
                        ))}
                    </div> :
                        <p>No matching addresses</p>}
                    <div>{error}</div>
                </div>
            :
            <div>
                <p>Order Address: {addy}</p>
                <p>Lat: {coords.lat} Long: {coords.lng}</p>
                <div className="select-div">
                    < GoogleMapWidget coords={coords}/>
                    <div className="tree-select">
                        <h3>Large trees: </h3>
                        {treesRef.current.Large.map(t =>
                            <TreeButton key={t.id} tree={t} handleAdd={handleAdd} handleSub={handleSub} />)}
                        <h3>Medium trees: </h3>
                        {treesRef.current.Medium.map(t =>
                            <TreeButton key={t.id} tree={t} handleAdd={handleAdd} handleSub={handleSub} />)}
                        <h3>Small trees: </h3>
                        {treesRef.current.Small.map(t =>
                            <TreeButton key={t.id} tree={t} handleAdd={handleAdd} handleSub={handleSub} />)}
                        <button onClick={handleFinalize} disabled={!trees.length}>Submit order</button>
                    </div>
                </div>
            </div>
            }
        </main>
    );
}

