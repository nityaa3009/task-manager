import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/tasks">Task List</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;