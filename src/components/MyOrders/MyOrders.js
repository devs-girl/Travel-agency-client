import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const MyOrders = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  // get all data
  useEffect(() => {
    fetch(`https://ghastly-flesh-56862.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, [user.email]);

  // get my order
  useEffect(() => {
    const myOwnOrders = allOrders.filter((order) => order.email === user.email);
    setMyOrders(myOwnOrders);
  }, [allOrders, user.email]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://ghastly-flesh-56862.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          }
        });
    }
  };

  return (
      <div>
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
              {myOrders.map((order) => (
                <tr>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.place}</td>
                  <td>{order.journeyDate}</td>
                  <td>
                    {order.status === "Pending" ? (
                      <button className="btn btn-primary">
                        {order.status}
                      </button>
                    ) : (
                      <button className="btn btn-success">
                        {order.status}
                      </button>
                    )}
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

export default MyOrders;