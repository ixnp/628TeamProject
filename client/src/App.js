import TaskForm from "./components/CreateTaskPage";
import Tasks from "./components/Tasks";
import React, { useState } from "react";
import {tasksTemp} from "./data/TempTasks";


function App() {
  const [formRendered, setformRendered] = useState("");
  const [taskStates, setTasks] = useState(tasksTemp);

  const updateTasks = (newTask) => {
    setTasks((prevTasks) => setTasks([...prevTasks, newTask]));
  }

  //Renders Task Form
  function CreateNewTaskButton() {
    function handleClick() {
      return setformRendered(<TaskForm updateTasks={updateTasks} />);
    }

    return <button onClick={handleClick}>Create New Task</button>;
  }

  return (
    <div>
      <h1>628 Group Project - Untitled</h1>
      <p>{formRendered}</p>
      <CreateNewTaskButton />
      <Tasks tasks={taskStates} />
    </div>
  );
}

export default App;
