// WeatherApp.js

import React, { useState } from "react";
import "./weather.css"; // Import the CSS file

const WeatherApp = () => {
  const [cityInput, setCityInput] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [message, setMessage] = useState(null); // New state for displaying messages

  const API_KEY = "e153f08bcd3547b4b6b183243241803"; // Your WeatherAPI API key

  const searchWeather = () => {
    if (!cityInput) {
      showMessage("Please enter a city name.", true);
      return;
    }

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityInput}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const temperature = data.current.temp_c;
        const weatherDescription = data.current.condition.text;
        const iconUrl = data.current.condition.icon;
        setWeatherInfo({ temperature, weatherDescription, iconUrl });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        showMessage(
          "Weather data not available for the specified city.Weather data not available for the specified city.Weather data not available for the specified city.Weather data not available for the specified city.Weather data not available for the specified city.Weather data not available for the specified city.",
          true
        );
      });
  };

  const showMessage = (text, isError = false) => {
    setMessage({ text, error: isError });
  };

  return (
    <div className="container-center" style={{ position: "relative" }}>
      <div className="container">
        <h1>Weather Application</h1>
        <div className="search-container">
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            placeholder="Enter city name"
          />
          <button onClick={searchWeather}>Search</button>
        </div>
        {weatherInfo && (
          <div className="weather-info">
            <p>Temperature: {weatherInfo.temperature}°C</p>
            <p>Weather: {weatherInfo.weatherDescription}</p>
            <img
              src={weatherInfo.iconUrl}
              alt="Weather Icon"
              className="weather-icon"
            />
          </div>
        )}
        {/* Display MessageOverlay if message is set */}
        {message && (
          <div className="message-overlay">
            <div className="message-container">
              {/* Replace the existing button with the cross icon */}
              <div className="btn-fix">
                <button className="close-icon" onClick={() => setMessage(null)}>
                  &#10006; {/* This is the cross icon */}
                </button>
              </div>

              {message.error ? (
                <p className="error-message">{message.text}</p>
              ) : (
                <p>{message.text}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div
        className="background-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508317588497-3e3ad0b9456c')",
        }}
      />
    </div>
  );
};

export default WeatherApp;
