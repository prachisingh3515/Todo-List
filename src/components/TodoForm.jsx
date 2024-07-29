import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTask }) => {
  // State to store the title of the new task
  const [title, setTitle] = useState("");
  // State to store the description of the new task
  const [description, setDescription] = useState("");

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    if (title && description) {
      // Check if both title and description are provided
      // Add the new task to the task list
      addTask({
        id: Date.now(), // Unique ID for the task
        title, // Task title
        description, // Task description
        completed: false, // Initial completed status
        timestamp: new Date().toLocaleString(), // Current timestamp
      });
      // Clear the input fields
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for task title */}
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Textarea for task description */}
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* Submit button to add task */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
