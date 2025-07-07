import { useState, useEffect } from 'react';

const useAlarms = () => {
    const [alarms, setAlarms] = useState([]);

    const setAlarm = (taskId, time) => {
        const alarmId = setTimeout(() => {
            alert(`Reminder: Task ${taskId} is due!`);
            clearAlarm(alarmId);
        }, time);

        setAlarms(prevAlarms => [...prevAlarms, { taskId, alarmId }]);
    };

    const clearAlarm = (alarmId) => {
        clearTimeout(alarmId);
        setAlarms(prevAlarms => prevAlarms.filter(alarm => alarm.alarmId !== alarmId));
    };

    const clearAllAlarms = () => {
        alarms.forEach(alarm => clearTimeout(alarm.alarmId));
        setAlarms([]);
    };

    useEffect(() => {
        return () => {
            clearAllAlarms();
        };
    }, []);

    return { setAlarm, clearAlarm, clearAllAlarms };
};

export default useAlarms;