import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { Task } from '../types';

const TaskForm: React.FC<{ task?: Task; onClose: () => void }> = ({ task, onClose }) => {
    const { addTask, updateTask } = useTasks();
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [deadline, setDeadline] = useState(task ? task.deadline : '');
    const [alarmTime, setAlarmTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask = { title, description, deadline, alarmTime };
        if (task) {
            updateTask({ ...task, ...newTask });
        } else {
            addTask(newTask);
        }
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h2>{task ? 'Edit Task' : 'New Task'}</h2>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
            />
            <input
                type="time"
                value={alarmTime}
                onChange={(e) => setAlarmTime(e.target.value)}
                placeholder="Set Alarm Time"
            />
            <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
            <button type="button" onClick={onClose}>Cancel</button>
        </form>
    );
};

export default TaskForm;