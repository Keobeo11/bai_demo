import React from 'react';

const DayForecast = ({ day }) => {
    return (
        <div className="day-forecast">
            <h4>{day.day}</h4>
            <div>{day.tempMax}°C / {day.tempMin}°C</div>
            <div>{day.weather}</div>
        </div>
    );
}

export default DayForecast;
