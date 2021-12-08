import React, {useState} from "react";
import * as treesAPI from '../../utilities/trees-api';

export default function TreeLineItem({tree}) {

    const [available, setAvailable] = useState(tree.isAvailable);
    const [showEdit, setShowEdit] = useState(false);
    const [treeInfo, setTreeInfo] = useState(tree);

    async function toggleAvail() {
        const newTree = await treesAPI.toggleAvail(tree._id);
        setAvailable(newTree.isAvailable);
    }

    function handleChange(evt) {
        setTreeInfo({ ...treeInfo, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit() {
        const updatedTree = await treesAPI.update(tree._id, treeInfo);
        setTreeInfo(updatedTree);
        setShowEdit(false);
    }

    return (
        <>
            {!showEdit ?
                <tr>
                    <td>
                        <input
                            type="checkbox"
                            checked={available}
                            onChange={toggleAvail}
                        />
                    </td>
                    <td>{treeInfo.name}</td>
                    <td>{treeInfo.species}</td>
                    <td>{treeInfo.stature}</td>
                    <td>{treeInfo.description}</td>
                    <td><button onClick={() => setShowEdit(true)}>?</button></td>
                </tr>
                :
                <tr>
                    <td></td>
                    <td><input type="text" name="name" value={treeInfo.name} onChange={handleChange} required /></td>
                    <td><input type="text" name="species" value={treeInfo.species} onChange={handleChange} required /></td>
                    <td><input type="text" name="stature" value={treeInfo.stature} onChange={handleChange} required /></td>
                    <td><textarea name="description" value={treeInfo.description} onChange={handleChange} required /></td>
                    <td><button onClick={handleSubmit}>Save</button></td>
                </tr>
            }
        </>);
  }