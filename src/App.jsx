import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to the list
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to update an existing task
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  // Function to toggle the completion status of a task
  const markAsDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      {/* Main heading of the application */}
      <h1>Todo List</h1>
      {/* Component to add a new task */}
      <TodoForm addTask={addTask} />
      {/* Component to display the list of tasks */}
      <TodoList tasks={tasks} updateTask={updateTask} markAsDone={markAsDone} />
    </div>
  );
};

export default App;
