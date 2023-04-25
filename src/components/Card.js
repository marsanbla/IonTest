import React from "react";
import Spinner from "./Spinner";
import { BsFillSunFill } from "react-icons/bs";
import { GiThermometerCold } from "react-icons/gi";
import { BiWind } from "react-icons/bi";
import { TbWorldLatitude } from "react-icons/tb";
import { TbWorldLongitude } from "react-icons/tb";

import { WiHumidity } from "react-icons/wi";


const Card = ({ loadingData, showData, weatherData ,imgData}) => {
  if (loadingData) {
    return <Spinner />;
  }
  

  var hoy = new Date();
  var day = hoy.getDate();
  var month = hoy.getMonth() + 1;
  var year = hoy.getFullYear();
  var date = day + "/" + month + "/" + year;

  return (
    <div className="mt-5">
      {showData === true ? (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className="card-title">
                  {weatherData.name} {weatherData.sys.country}
                </h3>
                <p className="card-date">{date}</p>
                <h1 className="card-temp">
                  {(weatherData.main.temp - 273.15).toFixed(1)}ºC
                </h1>
                <p className="descriptiow">
                  {weatherData.weather[0].description}
                </p>
                <img
                  src={imgData}
                  className="img-fluid rounded"
                  alt="Weather"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start mt-2">
                <h5 className="card-text">
                <BsFillSunFill />
                  Max Temp : {(weatherData.main.temp_max - 273.15).toFixed(1)}ºC
                  
                </h5>
                <h5 className="card-text">
                  <GiThermometerCold />
                  Min Temp : {(weatherData.main.temp_min - 273.15).toFixed(1)}ºC
                  <img src="/src/assetts/cold.png" alt=""/>
                </h5>
                <h5 className="card-text">
                  <WiHumidity />
                <img src="/src/assetts/humidity.png" alt=""/>
                Humidity : {weatherData.main.humidity}%
                </h5>
                <hr></hr>
              </div>
              <div className="other">
                <h3 className="wind-now"><BiWind/> Wind : {(weatherData.wind.speed)}m/s</h3>
                <h3 className="Long-now"><TbWorldLongitude/> Long : {(weatherData.coord.lon)}</h3>
                <h3 className="Lat-now"><TbWorldLatitude/>  Lat : {(weatherData.coord.lat)} </h3>
                <img src={imgData} className="img-fluid rounded" alt="Weather" />
              </div>
              </div>
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
