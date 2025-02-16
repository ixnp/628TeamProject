import TaskForm from "./components/CreateTaskPage";
import Tasks from "./components/Tasks";
import React, { useState } from "react";
//TempTasks
//These tasks will be removed once we implement the Database
const tasksTemp = [
  {
    description: "Finish the final project report for Software Engineering.",
    dueDate: "2025-01-30",
    dueTime: "23:59",
    priority: 5,
    taskName: "Final Project Report",
    taskType: "School",
  },
  {
    description: "Attend team meeting to discuss Q1 roadmap.",
    dueDate: "2025-01-28",
    dueTime: "10:00",
    priority: 4,
    taskName: "Team Meeting",
    taskType: "Work",
  },
  {
    description: "Dinner with friends at the new Italian restaurant downtown.",
    dueDate: "2025-01-27",
    dueTime: "19:30",
    priority: 3,
    taskName: "Dinner with Friends",
    taskType: "Social",
  },
  {
    description: "Annual medical check-up with Dr. Smith.",
    dueDate: "2025-01-29",
    dueTime: "14:00",
    priority: 4,
    taskName: "Doctor's Appointment",
    taskType: "Appointment",
  },
  {
    description: "Volunteer at the community cleanup event.",
    dueDate: "2025-01-31",
    dueTime: "08:00",
    priority: 2,
    taskName: "Community Cleanup",
    taskType: "Event",
  },
];

function App() {
  const [formRendered, setformRendered] = useState("");
  const [taskStates, setTasks] = useState(tasksTemp);

  const updateTasks = (newTask) =>
    setTasks((prevTasks) => setTasks([...prevTasks, newTask]));

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
