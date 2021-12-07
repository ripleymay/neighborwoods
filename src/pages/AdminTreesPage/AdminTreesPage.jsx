import React, { useState, useEffect } from 'react';
import * as treesAPI from '../../utilities/trees-api';
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
                    <tr>
                        <th>Tree</th>
                        <th>Species</th>
                        <th>Stature</th>
                        <th>Available</th>
                    </tr>
                    {trees.map(t =>
                        <tr>
                            <td>{t.name}</td>
                            <td>{t.species}</td>
                            <td>{t.stature}</td>
                            <td>{t.isAvailable ? 'True' : 'False'}</td>
                        </tr>
                    )}
                </table>
            </div>
        </main>
    );
}