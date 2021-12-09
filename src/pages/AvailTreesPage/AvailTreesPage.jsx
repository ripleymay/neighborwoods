import React, { useState, useEffect } from 'react';
import * as treesAPI from '../../utilities/trees-api';
import './AvailTreesPage.css';
import TreeCard from '../../components/TreeCard/TreeCard';


export default function AvailTreesPage() {

    const [trees, setTrees] = useState([]);

    useEffect(function() {
        async function getTrees() {
          const trees = await treesAPI.getAvail();
          setTrees(trees);
        }
        getTrees();
      }, []);

    return (
        <main className="AvailTreesPage">
            <h1 className="page-title">Available trees</h1>
            <p>Tree availability varies throughout the season based on nursery inventory. 
                We appreciate your understanding and flexibility.</p>
            <hr />
            <div className="tree-scroll">
                <div className="tree-cards">{trees.map(t => <TreeCard tree={t} />)}</div>
                <div className="scroll-down"></div>
            </div>
        </main>
    );
}