import React from 'react';

interface TaskCardProps {
    title: string;
    description: string;
    deadline: string;
    completed: boolean;
    onComplete: () => void;
    onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, deadline, completed, onComplete, onDelete }) => {
    return (
        <div className={`task-card ${completed ? 'completed' : ''}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Deadline: {new Date(deadline).toLocaleString()}</p>
            <div className="task-card-actions">
                <button onClick={onComplete} disabled={completed}>
                    {completed ? 'Completed' : 'Mark as Complete'}
                </button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default TaskCard;