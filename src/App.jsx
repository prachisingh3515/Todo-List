import React, { useState,useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css'

const App = () => {

  //For Animation
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[])

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
      
      <h1>Todo List</h1>
      
      <TodoForm addTask={addTask} />
      
      <TodoList tasks={tasks} updateTask={updateTask} markAsDone={markAsDone} />
    </div>
  );
};

export default App;
