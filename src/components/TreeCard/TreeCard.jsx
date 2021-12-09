import './TreeCard.css';

export default function TreeCard({tree}) {

    return (
      <div className="TreeCard">
        <div className="tree-title">
          <div className="tree-name">
            <h2>{tree.name}</h2>
            <p><span className="italic">{tree.species}</span></p>
          </div>
          <h2>{tree.stature}</h2>
        </div>
          <p className="tree-desc">{tree.description}</p>
      </div>
    );
  }