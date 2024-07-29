import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ tasks, updateTask, markAsDone }) => {
  // State to store the search term for filtering tasks
  const [searchTerm, setSearchTerm] = useState("");

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search bar to filter tasks */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Tasks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Display the list of filtered tasks */}
      <ul>
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            markAsDone={markAsDone}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
