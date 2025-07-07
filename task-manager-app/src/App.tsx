import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import TaskList from './pages/TaskList';
import Settings from './pages/Settings';
import './styles/globals.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/tasks" component={TaskList} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;