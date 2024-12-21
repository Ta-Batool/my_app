import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TodoApp from './components/TodoApp';
import "./App.css";

function App() {
  return (
    <div>
      {/* Pink navbar only */}
      <nav className="navbar">
        <h1>Todo App</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/tasks">Task Details</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TodoApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
