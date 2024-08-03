import React, { useState } from "react";
import { FaEdit, FaCheck, FaCheckCircle } from "react-icons/fa";
import "./TodoItem.css";

const TodoItem = ({ task, updateTask, markAsDone }) => {
  // State to manage the editing 
  const [isEditing, setIsEditing] = useState(false);
  // State to manage the title 
  const [title, setTitle] = useState(task.title);
  // State to manage the description 
  const [description, setDescription] = useState(task.description);

  // Function to handle updating the task details
  const handleUpdate = () => {
    
    updateTask({
      ...task,
      title,
      description,
      timestamp: new Date().toLocaleString(),
    });
    
    setIsEditing(false);
  };

  return (
    
    <li className={task.completed ? "completed" : ""}>
      <div>
        {isEditing ? (
          <div>
            
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
        
            <button onClick={handleUpdate}>Update</button>
          </div>
        ) : (
          <div>
        
            <h3>{task.title}</h3>
            
            <p className="description">{task.description}</p>
            
            <p className="timestamp">Last updated: {task.timestamp}</p>
          </div>
        )}
      
        <div className="icon-buttons">
          {/* Button to toggle task completion status */}
          <span className="icon-button" onClick={() => markAsDone(task.id)}>
            {task.completed ? <FaCheck /> : <FaCheckCircle />}
          </span>
          {/* Button to enable editing mode*/}
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
