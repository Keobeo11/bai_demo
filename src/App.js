import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import WeatherHighlights from './components/WeatherHighlights';
import RainForecast from './components/RainForecast';
import DayForecast from './components/DayForecast';

function App() {
    const [weather, setWeather] = useState(null);
    const [rainData, setRainData] = useState([]);
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=YOUR_API_KEY')
            .then(response => {
                const data = response.data;
                setWeather({
                    temp: data.main.temp,
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                });
            });

        setRainData([
            { time: '9 am', rain: 10 },
            { time: '12 pm', rain: 20 },
            { time: '3 pm', rain: 40 },
            { time: '6 pm', rain: 60 },
        ]);

        setForecast([
            { day: 'Tuesday', tempMax: 26, tempMin: 11, weather: 'Cloudy' },
            { day: 'Wednesday', tempMax: 26, tempMin: 11, weather: 'Rainy' },
            { day: 'Thursday', tempMax: 26, tempMin: 11, weather: 'Snowfall' },
        ]);
    }, []);

    return (
        <div className="app">
            <Sidebar />
            <div className="main-content">
                {weather && <WeatherHighlights weather={weather} />}
                <RainForecast data={rainData} />
                <div className="forecast">
                    {forecast.map(day => <DayForecast key={day.day} day={day} />)}
                </div>
            </div>
        </div>
    );
}

export default App;
