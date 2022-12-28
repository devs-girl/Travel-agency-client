import React, { useEffect, useState } from "react";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";

const ManageAll = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://ghastly-flesh-56862.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  //updatestatus
  const handleUpdateStatus = id => {
    const url = `https://ghastly-flesh-56862.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orders)
    })
    .then(res => res.json())
    .then(data=> {
      if(data.modifiedCount > 0){
        alert("Successfiully updated status")
      }
    })
  }
//delete order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://ghastly-flesh-56862.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <div>
        <div className="bradcam-area bradcam-bg-4  mb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="bradcam-text text-center">
                  <h3>Manage All Orders</h3>
                  <p>Users Available: {orders.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Destination</th>
                <th scope="col">Journey Date</th>
                <th scope="col">Status</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.place}</td>
                  <td>{order.journeyDate}</td>
                  <td>
                    { order.status === 'Pending' ? <button onClick={() => handleUpdateStatus(order._id)} className="btn btn-dark">{order.status}</button> : <button className="btn btn-success">{order.status}</button>}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAll;