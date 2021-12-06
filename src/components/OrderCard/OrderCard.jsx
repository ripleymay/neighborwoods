import './OrderCard.css';
export default function OrderCard({order}) {

    return (
      <div className="OrderCard">
          <p>{order.status} on {new Date(order.createdAt).toLocaleDateString()}</p>
          {/* {order.trees.map(t => <p>{t}</p>)} */}
          <p>{order.address}</p>
      </div>
    );
  }