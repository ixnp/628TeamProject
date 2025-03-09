import "./styles/Variables.css";
import "./styles/Main.css";
import TaskForm from "./components/CreateTaskForm";
import SortTaskMenu from "./components/SortTaskMenu";
import AIrequest from "./components/AIrequest";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { tasksTemp } from "./data/TempTasks";

function App() {
  const [taskStates, setTasks] = useState(tasksTemp);

  useEffect(() => {
    getTasks();
  });
  const getTasks = async () => {
    let res = await fetch("http://localhost:5050/task");
    let data = await res.json();
    setTasks(data);
  };

  const addTask = (newTask) => {
    setTasks([...taskStates, newTask]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/new_task">Create New Task</NavLink>
            </li>
            <li>
              <NavLink to="/task_bot">Taks Bot</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<SortTaskMenu tasks={taskStates} />} />
        <Route path="/new_task" element={<TaskForm updateTasks={addTask} />} />
        <Route path="/task_bot" element={<AIrequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
