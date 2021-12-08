import React, { useState, useEffect } from 'react';
import * as treesAPI from '../../utilities/trees-api';
import TreeLineItem from '../../components/TreeLineItem/TreeLineItem';
import './AdminTreesPage.css';

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
            <div className="admin-tree-scroll">
                <table>
                    <thead>
                        <tr>
                            <th>Available</th>
                            <th>Tree</th>
                            <th>Species</th>
                            <th>Stature</th>
                            <th>Description</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trees.map(t => < TreeLineItem key = {t._id} tree={t} />)}
                    </tbody>
                </table>
            </div>
        </main>
    );
}