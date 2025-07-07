import React, { useState } from 'react';
import Modal from 'react-modal';

const AlarmModal = ({ isOpen, onRequestClose, onSetAlarm }) => {
    const [alarmTime, setAlarmTime] = useState('');
    const [notification, setNotification] = useState(false);

    const handleSetAlarm = () => {
        if (alarmTime) {
            onSetAlarm(alarmTime, notification);
            onRequestClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="alarm-modal" overlayClassName="overlay">
            <h2>Set Alarm</h2>
            <div className="alarm-input">
                <label htmlFor="alarmTime">Alarm Time:</label>
                <input
                    type="datetime-local"
                    id="alarmTime"
                    value={alarmTime}
                    onChange={(e) => setAlarmTime(e.target.value)}
                />
            </div>
            <div className="notification-option">
                <label>
                    <input
                        type="checkbox"
                        checked={notification}
                        onChange={() => setNotification(!notification)}
                    />
                    Enable Notification
                </label>
            </div>
            <button onClick={handleSetAlarm}>Set Alarm</button>
            <button onClick={onRequestClose}>Cancel</button>
        </Modal>
    );
};

export default AlarmModal;