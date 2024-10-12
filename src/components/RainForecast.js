import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const RainForecast = ({ data }) => {
    return (
        <div className="rain-forecast">
            <h3>Chance of Rain</h3>
            <LineChart width={400} height={200} data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rain" stroke="#8884d8" />
            </LineChart>
        </div>
    );
}

export default RainForecast;
