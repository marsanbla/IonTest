import React, { useState } from "react";

const Form = ({ newLocation, newImg }) => {
  const [city, setCity] = useState("");
  const [img, setImg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });

    if (city === "" || !city) return;

    newLocation(city);
    newImg(city);
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Introduce la ciudad"
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn btn-primary input-group-text" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
