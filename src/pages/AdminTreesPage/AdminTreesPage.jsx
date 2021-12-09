import React, { useState, useEffect } from 'react';
import * as treesAPI from '../../utilities/trees-api';
import TreeLineItem from '../../components/TreeLineItem/TreeLineItem';
import './AdminTreesPage.css';

export default function AdminTreesPage() {

    const [trees, setTrees] = useState([]);
    const [newTree, setNewTree] = useState({
        name: '',
        species: '',
        stature: '',
        description: '',
        isAvailable: false
    });

    function handleChange(evt) {
        setNewTree({ ...newTree, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit() {
        const updatedTree = await treesAPI.create(newTree);
        setTrees([...trees, updatedTree]);
        setNewTree({ name: '', species: '', stature: '', description: '' });
    }

    useEffect(function() {
        async function getTrees() {
          const trees = await treesAPI.getAll();
          setTrees(trees);
        }
        getTrees();
      }, []);

    return (
        <main className="AdminTreesPage">
            <h1 className="page-title">All trees</h1>
            <hr />
            <div className="admin-tree-scroll">
                <table>
                    <thead>
                        <tr>
                            <th>Available</th>
                            <th>Tree</th>
                            <th>Species</th>
                            <th>Stature</th>
                            <th>Description</th>
                            <th>Edit?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>X</td>
                            <td><input type="text" name="name" value={newTree.name} onChange={handleChange} required /></td>
                            <td><input type="text" name="species" value={newTree.species} onChange={handleChange} required /></td>
                            <td><input type="text" name="stature" value={newTree.stature} onChange={handleChange} required /></td>
                            <td><textarea name="description" value={newTree.description} onChange={handleChange} required /></td>
                            <td><button onClick={handleSubmit}>Save</button></td>
                        </tr>
                        {trees.map(t => < TreeLineItem key = {t._id} tree={t} />)}
                    </tbody>
                </table>
            </div>
        </main>
    );
}