
import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';


const WeatherPanel = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');


  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=247100dab1d510d61357f0ac58b625c5&lang=es&q=${loc}`;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
        setLoading(false);
        setShow(true);

        // Use the Flickr API to retrieve a photo of the location
  

  return (
    <React.Fragment>
      <Form newLocation={getLocation}
       https://github.com/marsanbla/IonTest/commit/675c719814c42a7ef181e4f56da888797bead867

      <Card
        showData={show}
        loadingData={loading}
        weatherData={weather}
        photoUrl={photoUrl}
      />
    </React.Fragment>
  );
};

export default WeatherPanel;
