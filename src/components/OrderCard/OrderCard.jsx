export default function OrderCard({order}) {

    return (
      <div className="OrderCard">
          <p>{order.address}</p>
      </div>
    );
  }