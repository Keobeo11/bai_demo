import React from 'react';
import { FaHome, FaCloudSun, FaMapMarkerAlt, FaChartLine, FaCalendarAlt, FaCog } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><FaHome /> Home</li>
                <li><FaCloudSun /> Forecast</li>
                <li><FaMapMarkerAlt /> Locations</li>
                <li><FaChartLine /> Analytics</li>
                <li><FaCalendarAlt /> Calendar</li>
                <li><FaCog /> Settings</li>
            </ul>
        </div>
    );
}

export default Sidebar;
