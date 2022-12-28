import React, { useRef } from "react";

const AddEvents = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const packageRef = useRef();
  const imageRef = useRef();
  const offerRef = useRef();

  const addNewEvent = (e) => {
    e.preventDefault();
    const img = imageRef.current.value;
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const packages = packageRef.current.value;
    const offer = offerRef.current.value;
    

    const newEvent = {name, packages,description, offer, img }

    fetch('https://ghastly-flesh-56862.herokuapp.com/addevent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newEvent)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            alert("Event added successfully")
            e.target.reset();
        }
    })

  };

  return (
    <div>
      
      <div className="container mb-5">
        <div className="col-md-8 col-lg-8 m-auto text-start">
          <form onSubmit={addNewEvent}>
            <div className="form-group">
              <label htmlFor="name" className="form-label text-primary mt-2">
                Event name
              </label>
              <input
                id="name"
                className="form-control"
                type="text"
                placeholder="Event name"
                ref={nameRef}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc" className="form-label text-primary mt-2">
                Description
              </label>
              <textarea
                className="form-control"
                name=""
                id="desc"
                cols="30"
                rows="5"
                placeholder="Description"
                ref={descriptionRef}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="package" className="form-label text-primary mt-2">
                Package
              </label>
              <input
                id="package"
                className="form-control"
                type="text"
                placeholder="Package"
                ref={packageRef}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="offer" className="form-label text-primary mt-2">
                Offers
              </label>
              <input
                id="offer"
                className="form-control"
                type="text"
                placeholder="Offer"
                ref={offerRef}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image" className="form-label text-primary mt-2">
                Image url link
              </label>
              <input
                id="image"
                className="form-control"
                type="text"
                placeholder="URL of image"
                ref={imageRef}
                required
              />
            </div>
            <button className="btn btn-primary mt-3">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;