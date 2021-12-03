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
            <div>
                <h1>Available trees</h1>
                <div>
                    {trees.map(t => <TreeCard tree={t} />)}
                </div>
            </div>
        </main>
    );
}