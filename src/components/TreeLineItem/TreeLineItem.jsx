import React, {useState} from "react";
import * as treesAPI from '../../utilities/trees-api';

export default function TreeLineItem({tree}) {

    const [available, setAvailable] = useState(tree.isAvailable);

    async function toggleAvail() {
        const newTree = await treesAPI.toggleAvail(tree._id);
        setAvailable(newTree.isAvailable);
    }

    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    checked={available}
                    onChange={toggleAvail}
                />
            </td>
            <td>{tree.name}</td>
            <td>{tree.species}</td>
            <td>{tree.stature}</td>
            <td>{tree.description}</td>
        </tr>
    );
  }