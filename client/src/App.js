import TaskForm from "./components/CreateTaskPage";
import Tasks from "./components/TaskForm";
import React, { useEffect, useState } from "react";
import {tasksTemp} from "./data/TempTasks";
import { backendURL } from "./data/backendURL";


function App() {
  const [formRendered, setformRendered] = useState("");
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
    <div>
      <h1>628 Group Project - Untitled</h1>
      <p>{formRendered}</p>
      <CreateNewTaskButton />
      <Tasks tasks={taskStates} />
    </div>
  );
}

export default App;
