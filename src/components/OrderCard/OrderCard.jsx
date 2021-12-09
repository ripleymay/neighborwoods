import './OrderCard.css';
export default function OrderCard({order}) {

    return (
      <div className="OrderCard">
        <div className="order-metadata">
          <div className="order-status">
            <div className="circle-holder"><div className={`status-circle ${order.status}`}></div></div>
            <h2>{order.status}</h2>
          </div>
          <div className="order-dates">
            <p>Created on {new Date(order.createdAt).toLocaleDateString()}</p>
            <p>Last updated on {new Date(order.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
          <h3><span className="underline">{order.address}</span></h3>
          <h3>Trees: {order.trees.map((t, idx) => <span>{t.name}{idx + 1 !== order.trees.length && ', '} </span>)}</h3>
      </div>
    );
  }