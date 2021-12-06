import React, {useState} from "react";
import './TreeButton.css';

export default function TreeButton({tree, handleAdd, handleSub}) {

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
          <p>{count}</p>
          <p>{tree.name}</p>
          <button onClick={handleAddTree}>+</button>
          { count > 0 && <button onClick={handleSubTree}>-</button>}
      </div>
    );
  }