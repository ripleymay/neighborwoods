import './TreeCard.css';

export default function TreeCard({tree}) {

    return (
      <div className="TreeCard">
          <h4>{tree.name} ({tree.stature})</h4>
          <p><span className="italic">{tree.species}</span></p>
          <p>{tree.description}</p>
      </div>
    );
  }