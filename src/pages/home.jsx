import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Vacation planning", completed: false },
    { id: 2, name: "Cook dinner", completed: false },
    { id: 3, name: "Sign up for training", completed: false },
  ]);

  const [filter, setFilter] = useState('ALL'); // To store the current filter state

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    const newTaskName = prompt("Enter new task:");
    if (newTaskName) {
      setTasks([...tasks, { id: Date.now(), name: newTaskName, completed: false }]);
    }
  };

  // Function to filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'COMPLETED') {
      return task.completed;
    } else if (filter === 'PENDING') {
      return !task.completed;
    }
    return true; // If 'ALL' is selected, show all tasks
  });

  return (
    <div>
      <div className="todo-container">
        <h1>TODO LIST</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search note..." />
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="ALL">ALL</option>
            <option value="COMPLETED">Completed</option>
            <option value="PENDING">Pending</option>
          </select>
        </div>
        <div className="task-list">
          {filteredTasks.map(task => (
            <div className="task-item" key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? "completed" : ""}>
                {task.name}
              </span>
            </div>
          ))}
        </div>
        <button className="add-task-btn" onClick={addTask}>+</button>
      </div>
    </div>
  );
};

export default Home;
