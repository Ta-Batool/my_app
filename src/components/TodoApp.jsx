import React, { useState } from "react";
import Navbar from "./Navbar";
import "./TodoApp.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Vacation planning", completed: true },
    { id: 2, name: "Cook dinner", completed: false },
    { id: 3, name: "Sign up for training", completed: false },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="todo-container">
        <h1 className="text-center my-4">Task Details</h1>
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {/* Task List */}
        <ul className="list-group">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <li
                key={task.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  task.completed ? "list-group-item-success" : ""
                }`}
              >
                {task.name}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className="list-group-item text-center text-muted">
              No tasks found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
