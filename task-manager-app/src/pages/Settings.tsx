import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
    const [alarmPreference, setAlarmPreference] = useState('on');
    const [notificationPreference, setNotificationPreference] = useState('email');

    const handleAlarmChange = (event) => {
        setAlarmPreference(event.target.value);
    };

    const handleNotificationChange = (event) => {
        setNotificationPreference(event.target.value);
    };

    const handleSaveSettings = () => {
        // Logic to save settings (e.g., to local storage or an API)
        alert('Settings saved!');
    };

    return (
        <div className="settings-container">
            <h1 className="settings-title">Settings</h1>
            <div className="settings-option">
                <label htmlFor="alarm-preference">Alarm Preference:</label>
                <select id="alarm-preference" value={alarmPreference} onChange={handleAlarmChange}>
                    <option value="on">On</option>
                    <option value="off">Off</option>
                </select>
            </div>
            <div className="settings-option">
                <label htmlFor="notification-preference">Notification Preference:</label>
                <select id="notification-preference" value={notificationPreference} onChange={handleNotificationChange}>
                    <option value="email">Email</option>
                    <option value="sms">SMS</option>
                </select>
            </div>
            <button className="save-settings-button" onClick={handleSaveSettings}>Save Settings</button>
        </div>
    );
};

export default Settings;