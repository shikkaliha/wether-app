import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ThemeToggle from './Components/ThemeToggle';
import SearchBar from './Components/Searchbar';
import WeatherCard from './Components/WeatherCard';
import ForecastCard from './Components/ForecastCard';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(false);


  const apiKey = "e25ddb66337bc8c7f6c572ffe0527d30";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error(`City not found: ${city}`);
      }
      const data = await response.json();
      setWeatherData(data);

      const forecastResponse = await fetch(`${forecastApiUrl}${city}&appid=${apiKey}`);
      if (!forecastResponse.ok) {
        throw new Error(`Forecast data not found for: ${city}`);
      }
      const forecastData = await forecastResponse.json();
      setForecastData(forecastData.list.slice(0, 5));
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert(error.message);
      setWeatherData(null);
      setForecastData([]);
    }finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  const Footer = () => (
    <footer className="text-center mt-5 py-3">
      <p>© 2023 Weather App. Built with ❤️ using React.</p>
    </footer>
  );  

  return (
    <div className={`container-fluid ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <h1 id="heading">Weather App</h1>
      <SearchBar setCity={setCity} fetchWeatherData={fetchWeatherData} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
      <h1 id="heading">Weather forecast for the next five days</h1>
      <div className="row">
        {forecastData.length > 0 ? (
          forecastData.map((data, index) => (
            <ForecastCard key={index} data={data} />
          ))
        ) : (
          <div className="text-center">No forecast data available.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;