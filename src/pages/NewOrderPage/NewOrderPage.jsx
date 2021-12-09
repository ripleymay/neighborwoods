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
    const [atMax, setAtMax] = useState(false);
    const MAX_TREES = 5;
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
        const index =  trees.findIndex(t => t.name === tree.name)
        const newTrees = [...trees];
        newTrees.splice(index, 1);
        setTrees(newTrees);
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
            const dupes = await ordersAPI.checkDupes(addy);
            if (dupes.length) setError('Sorry! Theres already an order for that address placed within the last year. If you think this is a mistake, please call us.');
            const results = await ordersAPI.getLatLng(addy);
            setCoords({
                lat: results.results[0].geometry.location.lat,
                lng: results.results[0].geometry.location.lng
            });
        }
        if (isAddyValid) isValid();
    }, [addy, isAddyValid]);

    useEffect(function () {
        (trees.length < MAX_TREES) ? setAtMax(false) : setAtMax(true);
    }, [trees]);

    return (
        <main className="NewOrderPage">
            <h1 className="page-title">Place a new order</h1>
            <p>{ !isAddyValid ? 'Enter an address below where you\'d like to plant trees.' :
            'Select your trees! There is a limit of 5 for residential orders. Please prioritize large trees as they provide the most shade and energy benefits.' } </p>
            <hr />
            { !isAddyValid ?
                <div>
                    <form className="addy-form" onSubmit={handleSubmit}>
                        <input type="text" onChange={handleChange} value={addy} required />
                        <button className="auth-btn" type="submit" value="submit">🔎</button>
                    </form>
                    {addyMatches.length ? <div className="addy-btns">
                        {addyMatches.map((a, idx) => (
                            <button key={idx} className="addy-btn" onClick={handleSelect} value={a.description}>{a.description}</button>
                        ))}
                    </div> :
                        <p>No matching addresses</p>}
                </div>
            :
            <>
                <div className="addy-info">
                    <h3>{addy}</h3>
                    <p>Latitude: {parseFloat(coords.lat).toFixed(3)} / Longitude: {parseFloat(coords.lng).toFixed(3)}</p>
                </div>
                <div className="select-div">
                    < GoogleMapWidget coords={coords} />
                    { error ? 
                    <h2 id="addy-error">{error}</h2>
                    :
                    <div className="tree-select">
                        <h3>Large trees: </h3>
                        {treesRef.current.Large.map(t =>
                            <TreeButton key={t._id} tree={t} handleAdd={handleAdd} handleSub={handleSub} atMax={atMax}/>)}
                        <h3>Medium trees: </h3>
                        {treesRef.current.Medium.map(t =>
                            <TreeButton key={t._id} tree={t} handleAdd={handleAdd} handleSub={handleSub} atMax={atMax}/>)}
                        <h3>Small trees: </h3>
                        {treesRef.current.Small.map(t =>
                            <TreeButton key={t._id} tree={t} handleAdd={handleAdd} handleSub={handleSub} atMax={atMax}/>)}
                        <button className="auth-btn" onClick={handleFinalize} disabled={!trees.length}>Submit order</button>
                    </div>}
                </div>
            </>
            }
        </main>
    );
}

