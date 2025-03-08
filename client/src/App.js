import TaskForm from "./components/CreateTaskForm";
import SortTaskMenu from "./components/SortTaskMenu";
import AIrequest from "./components/AIrequest";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { tasksTemp } from "./data/TempTasks";

function App() {
  const [formRendered, setformRendered] = useState("");
  const [taskStates, setTasks] = useState(tasksTemp);

  const addTask = (newTask) => {
    setTasks([...taskStates, newTask]);
  };

  return (
    <BrowserRouter>
      <div className="main container">
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
