
import React, { useState, useEffect } from 'react';
import Form from './Form';
import Card from './Card';
import Flickr from 'flickr-sdk';

const WeatherPanel = () => {
  const [weather, setWeather] = useState([]);
  const [photoUrl, setPhotoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');

  const API_KEY = '38124ec124316614eb1bd93a693e04e1';

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
        const flickr = new Flickr(API_KEY);

        flickr.photos
          .search({
            text: loc,
            per_page: 1,
            sort: 'relevance',
            extras: 'url_n',
          })
          .then((response) => {
            const photo = response.body.photos.photo[0];
            const photoUrl = photo.url_n;

            setPhotoUrl(photoUrl);
          });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  return (
    <React.Fragment>
      <Form newLocation={getLocation}
      newImg={flickr} />

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
