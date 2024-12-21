import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        <li><a href="/">Home</a></li>
        <li><a href="/tasks">Task Details</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
