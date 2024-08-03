import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTask }) => {
  // State to store the title of the new task
  const [title, setTitle] = useState("");
  // State to store the description of the new task
  const [description, setDescription] = useState("");

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (title && description) {
      
      // Add the new task to the task list
      addTask({
        id: Date.now(), 
        title, 
        description, 
        completed: false, 
        timestamp: new Date().toLocaleString(), 
      });
      
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} data-aos="zoom-in">
      
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
