export interface Task {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    completed: boolean;
    alarm?: Alarm;
}

export interface Alarm {
    time: Date;
    isActive: boolean;
    notificationMessage: string;
}