import React, { useState, useEffect } from 'react';
import * as treesAPI from '../../utilities/trees-api';
// import './AdminTreesPage.css';
import TreeCard from '../../components/TreeCard/TreeCard';


export default function AdminTreesPage() {

    const [trees, setTrees] = useState([]);

    useEffect(function() {
        async function getTrees() {
          const trees = await treesAPI.getAll();
          setTrees(trees);
        }
        getTrees();
      }, []);

    return (
        <main className="AdminTreesPage">
            <h1>All trees</h1>
            <div className="tree-scroll">
                {trees.map(t => <TreeCard tree={t} />)}
            </div>
        </main>
    );
}