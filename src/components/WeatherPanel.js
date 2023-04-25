
import React,{useState,useEffect} from 'react';
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
    let urlWeather= "https://api.openweathermap.org/data/2.5/weather?appid=247100dab1d510d61357f0ac58b625c5&lang=es";
    let cityUrl = "&q=";
    
    

    const [weather,setWeather] = useState([]);
    const [img,setImg] = useState("");
    const [res,setRes] = useState([]);

    const [loading,setLoading] = useState(false);
    const [show,setShow] = useState(false);
    const [location,setLocation] = useState("");

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //realtime weather
        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok)throw {response}
            return response.json();
            
        }).then((wheatherData) =>
        {
            console.log(wheatherData);
            setWeather(wheatherData);
            setShow(true);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });



    }   
    const fetchRequest = async () => {
        const data = await fetch(
            'https://api.unsplash.com/search/photos?page=1&query=${location}&client_id=${oirEjoaSSJvdEdOwEdmR-qVywDg7q4H0k2fKGn45gD0}'
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log(result);
        setRes(result);
      };
      useEffect(() => {
        fetchRequest();
      }, []);

    return(
   <React.Fragment>
    <Form
            newLocation = {getLocation}
    />

    <Card
        showData = {show}
        imgData = {img}
        loadingData = {loading}
        weatherData = {weather}
 
    />

   </React.Fragment>
    );

}

export default WeatherPanel;