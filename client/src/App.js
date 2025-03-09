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
  //Fetches tasks on load
  useEffect(() => {
    getTasksRequest();
  });

  //Fetch All Tasks
  const getTasksRequest = async () => {
    let res = await fetch("http://localhost:5050/task");
    let data = await res.json();
    setTasks(data);
  };

  const postTaskRequest = async (task) => {
    let res = await fetch("http://localhost:5050/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    let data = await res.json();
    return data;
  };

  const deleteTaskRequest = async (id) => {
    let res = await fetch(`http://localhost:5050/task/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    return;
  };

  const addTask = async (taksData) => {
    let newTask = await postTaskRequest(taksData);
    setTasks([...taskStates, newTask]);
  };

  const deleteTask = async (id) => {
    await deleteTaskRequest(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
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
        <Route
          path="/"
          element={<SortTaskMenu tasks={taskStates} deleteTask={deleteTask} />}
        />
        <Route path="/new_task" element={<TaskForm updateTasks={addTask} />} />
        <Route path="/task_bot" element={<AIrequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
