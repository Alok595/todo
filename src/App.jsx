import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import IInput from "./components/IInput";
import Elements from "./components/Elements";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Retrieve tasks from localStorage when the app loads
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage when the tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);

    // Handle empty case - clear localStorage if no tasks remain
    if (updatedTasks.length === 0) {
      localStorage.removeItem("tasks");
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-gray-600">
        <div className="bg-blue-950 h-20 w-full">
          <Header />
        </div>
        <div className="w-full bg-gray-600">
          <IInput onAddTask={addTask} />
          <Elements tasks={tasks} onDeleteTask={deleteTask} />
        </div>
      </div>
    </>
  );
};

export default App;
