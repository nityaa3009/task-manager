import React from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskCard from '../components/TaskCard';
import './Dashboard.css';

const Dashboard = () => {
    const { tasks } = useTasks();

    const upcomingTasks = tasks.filter(task => {
        const deadline = new Date(task.deadline);
        return deadline > new Date() && !task.completed;
    });

    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Task Dashboard</h1>
            <h2 className="upcoming-tasks-title">Upcoming Tasks</h2>
            <div className="task-list">
                {upcomingTasks.length > 0 ? (
                    upcomingTasks.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))
                ) : (
                    <p>No upcoming tasks!</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;