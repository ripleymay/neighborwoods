import './OrderCard.css';
export default function OrderCard({order}) {

    return (
      <div className="OrderCard">
          <p>Created on {new Date(order.createdAt).toLocaleDateString()}</p>
          <p>Status: {order.status}</p>
          <p>Trees requested: {order.trees.map(t => <span>{t.name}, </span>)}</p>
          <p>{order.address}</p>
      </div>
    );
  }