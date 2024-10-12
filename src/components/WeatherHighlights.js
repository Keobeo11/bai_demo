import React from 'react';

const WeatherHighlights = ({ weather }) => {
    return (
        <div className="weather-highlights">
            <h2>Los Angeles, CA, USA</h2>
            <div className="weather-info">
                <div>Temperature: {weather.temp}°C</div>
                <div>Humidity: {weather.humidity}%</div>
                <div>Wind: {weather.wind} km/h</div>
            </div>
        </div>
    );
}

export default WeatherHighlights;
