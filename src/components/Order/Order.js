import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Order = () => {
  const [place, setPlace] = useState();
  const { id } = useParams();
  const { user } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const placeRef = useRef();
  const phoneRef = useRef();
  const dateRef = useRef();
  const addressRef = useRef();

  useEffect(() => {
    const url = `https://ghastly-flesh-56862.herokuapp.com/placeorder/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, [id]);

  const handleBook = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const place = placeRef.current.value;
    const phone = phoneRef.current.value;
    const journeyDate = dateRef.current.value;
    const address = addressRef.current.value;

    const userBookingInfo = {
      name,
      email,
      place,
      phone,
      journeyDate,
      address,
      status: "Pending",
    };

    fetch("https://ghastly-flesh-56862.herokuapp.com/placeorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userBookingInfo),
    })
    .then(res => res.json())
    .then(data=> {
      if(data.insertedId){
        alert("Destination booked succesfully");
        e.target.reset();
      }
    })
  };

  return (
    <div>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="p-3">
              <img
                className="img-fluid"
                style={{ borderRadius: "5px" }}
                src={place?.img}
                alt=""
              />
              <h1 className="my-3" style={{ textTransform: "uppercase" }}>{place?.name}</h1>
              <p className="mb-3" style={{ textAlign: "justify" }}>
                {place?.offer}
              </p>
              <p>{place?.packages}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3">
              <h3 className="text-start text-danger text-info mb-3">
                Please, Provide Your Info
              </h3>
              <form onSubmit={handleBook}>
                <input
                  className="form-control mb-3"
                  type="text"
                  value={user?.displayName}
                  ref={nameRef}
                  required
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  value={user?.email}
                  ref={emailRef}
                  required
                  disabled
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  value={place?.name}
                  ref={placeRef}
                  required
                  disabled
                />
                <input
                  className="form-control mb-3"
                  type="number"
                  placeholder="Mobile Number"
                  ref={phoneRef}
                  required
                />
                <div class="form-text text-start ms-2 mb-2">
                  Give your journey date
                </div>
                <input
                  className="form-control mb-3"
                  type="date"
                  placeholder="Journey date"
                  ref={dateRef}
                  required
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Address"
                  ref={addressRef}
                  required
                />
                <button className="btn btn-danger">
                  Book Now {place?.price}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;