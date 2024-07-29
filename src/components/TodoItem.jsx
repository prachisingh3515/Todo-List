import React, { useState } from "react";
import { FaEdit, FaCheck, FaCheckCircle } from "react-icons/fa";
import "./TodoItem.css";

const TodoItem = ({ task, updateTask, markAsDone }) => {
  // State to manage the editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage the title input field
  const [title, setTitle] = useState(task.title);
  // State to manage the description input field
  const [description, setDescription] = useState(task.description);

  // Function to handle updating the task details
  const handleUpdate = () => {
    // Update the task with new title, description, and timestamp
    updateTask({
      ...task,
      title,
      description,
      timestamp: new Date().toLocaleString(),
    });
    // Exit editing mode
    setIsEditing(false);
  };

  return (
    // Main container for the task item, conditionally styled as completed or not
    <li className={task.completed ? "completed" : ""}>
      <div>
        {isEditing ? (
          <div>
            {/* Input field for editing the task title */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* Textarea for editing the task description */}
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {/* Button to save the updated task details */}
            <button onClick={handleUpdate}>Update</button>
          </div>
        ) : (
          <div>
            {/* Display the task title */}
            <h3>{task.title}</h3>
            {/* Display the task description */}
            <p className="description">{task.description}</p>
            {/* Display the last updated timestamp */}
            <p className="timestamp">Last updated: {task.timestamp}</p>
          </div>
        )}
        {/* Container for action buttons (mark as done and edit) */}
        <div className="icon-buttons">
          {/* Button to toggle task completion status */}
          <span className="icon-button" onClick={() => markAsDone(task.id)}>
            {task.completed ? <FaCheck /> : <FaCheckCircle />}
          </span>
          {/* Button to enable editing mode (not shown when editing) */}
          {!isEditing && (
            <span className="icon-button" onClick={() => setIsEditing(true)}>
              <FaEdit />
            </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
