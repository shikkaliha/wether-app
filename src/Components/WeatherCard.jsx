import React from 'react';
import img1 from '../assets/freezing.jpg'
import img2 from '../assets/Cold.jpg';
import img3 from '../assets/Cool.jpg';
import img4 from '../assets/Warm.jpg';
import img5 from '../assets/Hot.jpg'

const WeatherCard = ({ weatherData }) => {
  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return <div className="text-center">No weather data available.</div>;
  }

  const temperature = Math.round(weatherData.main.temp);
  const description = weatherData.weather[0].description;
  const city = weatherData.name;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  const pressure = weatherData.main.pressure;

  const getWeatherImage = (temp) => {
    if (temp < 0) return img1;
    if (temp < 10) return img2;
    if (temp < 20) return img3;
    if (temp < 30) return img4;
    return img5;
  };

  const getTemperatureColor = (temp) => {
    if (temp < 0) return '#00b4d8'; 
    if (temp < 10) return '#48cae4'; 
    if (temp < 20) return '#90e0ef'; 
    if (temp < 30) return '#ffafcc'; 
    return '#ff477e'; 
  };
  

  return (
    <div className="col-12 col-md-6 mx-auto" id="temperature_display">
      <div className="card weather_card mx-auto">
        <div className="card-body text-center">
          <h5 className="card-title">{city}</h5>
          <img src={getWeatherImage(temperature)} alt="Weather Icon" className="weather-icon img-fluid mb-2" />
          <p className="temp_display" style={{ color: getTemperatureColor(temperature) }}>{temperature}°C</p>
          <p className="card-text">{description}</p>
          <div className="row mt-3">
            <div className="col-4">
              <p className="mb-0">Humidity</p>
              <p>{humidity}%</p>
            </div>
            <div className="col-4">
              <p className="mb-0">Wind</p>
              <p>{windSpeed} m/s</p>
            </div>
            <div className="col-4">
              <p className="mb-0">Pressure</p>
              <p>{pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;