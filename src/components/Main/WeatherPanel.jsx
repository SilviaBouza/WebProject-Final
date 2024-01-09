import React, {useState} from 'react';
import Search from './Search';
import Card from './Card';

const WeatherPanel = () => {

    let urlWeather ="https://api.openweathermap.org/data/2.5/weather?&appid=06599309ed2e40729ed638e24539ae5d&lan=es";
    let cityurl="&q=";      
    
    let urlForecast ="https://api.openweathermap.org/data/2.5/forecast?&appid=06599309ed2e40729ed638e24539ae5d&lan=es"
                  
   

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");


    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);


        urlWeather = urlWeather + cityurl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw new Error('Error fetching weather data');
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });


         urlForecast = urlForecast + cityurl + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw new Error('Error fetching weather data');
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        
    }


    return(

        <>
    
            <Search
                newLocation = {getLocation}
            />

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />


        </>

    );

}

export default WeatherPanel;




