import React, {useState} from "react";
import './TreeButton.css';

export default function TreeButton({tree, handleAdd, handleSub, atMax}) {

    const [count, setCount] = useState(0);

    function handleAddTree() {
        setCount(count + 1);
        handleAdd(tree);
    }

    function handleSubTree() {
        setCount(count - 1);
        handleSub(tree);
    }

    return (
      <div className="TreeButton">
          <p><span className="tree-num">{count}</span> {tree.name}</p>
          <div className="tree-btns">
            <button onClick={handleAddTree} disabled={atMax}>+</button>
            <button onClick={handleSubTree} disabled={!count}>-</button>
          </div>
      </div>
    );
  }