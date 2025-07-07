import React from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskCard from '../components/TaskCard';
import './TaskList.css';

const TaskList = () => {
    const { tasks, filterTasks, sortTasks } = useTasks();
    const [filter, setFilter] = React.useState('all');
    const [sortOrder, setSortOrder] = React.useState('deadline');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        filterTasks(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
        sortTasks(event.target.value);
    };

    return (
        <div className="task-list">
            <h1 className="task-list-title">Your Tasks</h1>
            <div className="task-list-controls">
                <select onChange={handleFilterChange} value={filter}>
                    <option value="all">All Tasks</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
                <select onChange={handleSortChange} value={sortOrder}>
                    <option value="deadline">Sort by Deadline</option>
                    <option value="priority">Sort by Priority</option>
                </select>
            </div>
            <div className="task-list-container">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;