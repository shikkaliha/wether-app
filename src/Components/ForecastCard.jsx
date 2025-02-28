import React from 'react';

const ForecastCard = ({ data }) => {
  const temp = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const dayName = new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });

  const getTemperatureColor = (temp) => {
    if (temp < 0) return '#00b4d8'; 
    if (temp < 10) return '#48cae4'; 
    if (temp < 20) return '#90e0ef'; 
    if (temp < 30) return '#ffafcc'; 
    return '#ff477e'; 
  };

  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
      <div className="card future-weather-card mx-auto">
        <div className="card-body text-center">
          <h5 className="card-title">{dayName}</h5>
          <img src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} alt="Weather Icon" className="weather-icon mb-2" />
          <p className="card-text" style={{ color: getTemperatureColor(temp) }}>{temp}°C</p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;