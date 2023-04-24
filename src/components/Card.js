import React from "react";
import Spinner from "./Spinner";

const Card = ({ loadingData, showData, weatherData }) => {
  if (loadingData) {
    return <Spinner />;
  }

  return (
    <div className="mt-5">
      {showData === true ? (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="col-md-12">
              <h3 className="card-title">{weatherData.name}</h3>
              <h1 className="card-temp">
                {(weatherData.main.temp - 273.15).toFixed(1)}ºC
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-light">No data</h2>
      )}
    </div>
  );
};

export default Card;
