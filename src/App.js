import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import TaskList from './pages/TaskList';
import Settings from './pages/Settings';
import { useTasks } from './hooks/useTasks';
import { useAlarms } from './hooks/useAlarms';
import './styles/animations.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const { alarms, setAlarm, checkAlarms } = useAlarms();

  useEffect(() => {
    // Check for alarms every minute
    const interval = setInterval(() => {
      checkAlarms();
    }, 60000);

    return () => clearInterval(interval);
  }, [checkAlarms]);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard tasks={tasks} addTask={addTask} />;
      case 'tasks':
        return <TaskList 
          tasks={tasks} 
          updateTask={updateTask} 
          deleteTask={deleteTask}
          setAlarm={setAlarm}
        />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard tasks={tasks} addTask={addTask} />;
    }
  };

  return (
    <div className="app">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        taskCount={tasks.length}
        pendingTasks={tasks.filter(task => !task.completed).length}
      />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;