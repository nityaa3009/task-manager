import { useState } from 'react';
import { Task } from '../types';

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks(prevTasks => [...prevTasks, task]);
    };

    const deleteTask = (taskId: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    const updateTask = (updatedTask: Task) => {
        setTasks(prevTasks => 
            prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
        );
    };

    const getTasks = () => {
        return tasks;
    };

    return {
        tasks,
        addTask,
        deleteTask,
        updateTask,
        getTasks,
    };
};

export default useTasks;