import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TaskForm from "./components/CreateTaskForm";
import SortTaskMenu from "./components/SortTaskMenu";
import AIrequest from "./components/AIrequest";
import "./styles/Variables.css";
import "./styles/Main.css";

export default function App() {
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
              <NavLink to="/task_bot">Task Bot</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<SortTaskMenu />} />
        <Route path="/new_task" element={<TaskForm/>} />
        <Route path="/task_bot" element={<AIrequest />} />
      </Routes>
    </BrowserRouter>
  );
}
