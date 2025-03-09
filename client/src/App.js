import "./styles/Variables.css";
import "./styles/Main.css";
import TaskForm from "./components/CreateTaskForm";
import SortTaskMenu from "./components/SortTaskMenu";
import AIrequest from "./components/AIrequest";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { tasksTemp } from "./data/TempTasks";

function App() {
  const [taskStates, setTasks] = useState(tasksTemp);

  useEffect(() => {
    async function getTasks() {
      const response = await fetch(`${backendURL}`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const tasks = await response.json();
      setTasks(tasks)
    }

    getTasks();
  
    return;
  }, [taskStates.length]);


  //Renders Task Form
  function CreateNewTaskButton() {
    function handleClick() {
      return setformRendered(<TaskForm/>);
    }

    return <button onClick={handleClick}>Create New Task</button>;
  }

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
