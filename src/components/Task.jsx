import React from 'react';

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {task.name}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ color: "red" }}>Delete</button>
    </div>
  );
};

export default Task;
