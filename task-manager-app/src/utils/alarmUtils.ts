export function setAlarm(deadline: Date, callback: () => void, alarmTime: number): NodeJS.Timeout {
    const now = new Date().getTime();
    const timeToAlarm = deadline.getTime() - now - alarmTime;

    if (timeToAlarm > 0) {
        return setTimeout(callback, timeToAlarm);
    }

    return setTimeout(callback, 0);
}

export function clearAlarm(alarmId: NodeJS.Timeout): void {
    clearTimeout(alarmId);
}

export function isAlarmDue(deadline: Date, alarmTime: number): boolean {
    const now = new Date().getTime();
    const timeToAlarm = deadline.getTime() - now - alarmTime;
    return timeToAlarm <= 0;
}