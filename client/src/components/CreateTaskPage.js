import React, { useState } from "react";
import "../styles/CreateTaskPage.css";
import { defaultTask, isTaskValid } from "./TaskUtils";
import { backendURL } from "../data/backendURL";

function TaskForm({ updateTasks }) {
  const [newTask, setNewTask] = useState({ defaultTask });

  const handleChange = (event) => {
    const name = event.target.name;     // The updated field name.
    const value = event.target.value;   // The updated field's new value.
    setNewTask((values) => ({ ...values, [name]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if(isTaskValid(newTask)) {
      
      // const newRecipe = { ...newTask };
  
      await fetch(`${backendURL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
      .catch(error => {
        window.alert(error);
        return;
      });
    
      setNewTask({ defaultTask });
      // navigate("/");
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-global">
        <h1>Create New Task</h1>
        <div class="wrapper">
          <div class="name-label">
            <label>Task Name:</label>
          </div>

          <div class="name">
            <input
              className="create-task-input"
              type="text"
              name="taskName"
              maxLength="16"
              value={newTask.taskName || ""}
              onChange={handleChange}
            />
          </div>

          <div class="date-label">
            <label>Due Date:</label>
          </div>

          <div class="date">
            <input
              className="create-task-input"
              type="date"
              name="dueDate"
              value={newTask.dueDate || ""}
              onChange={handleChange}
            />
          </div>

          <div class="time-label">
            <label>Due Time:</label>
          </div>

          <div class="time">
            <input
              className="create-task-input"
              type="time"
              name="dueTime"
              value={newTask.dueTime || ""}
              onChange={handleChange}
            />
          </div>

          <div class="priority-label">
            <label>Priority:</label>
          </div>

          <div class="priority">
            <input
              className="create-task-input"
              type="number"
              name="priority"
              min="1"
              max="5"
              step="1"
              value={newTask.priority || ""}
              onChange={handleChange}
            />
          </div>

          <div class="category-label">
            <label>Category:</label>
          </div>

          <div class="category">
            <select
              className="create-task-select"
              type="text"
              name="taskType"
              value={newTask.taskType || "Appointment"}
              onChange={handleChange}
            >
              <option value="Appointment">Appointment</option>
              <option value="Event">Event</option>
              <option value="School">School</option>
              <option value="Social">Social</option>
              <option value="Work">Work</option>
            </select>
          </div>

          <div class="desc-label">
            <label>Description:</label>
          </div>

          <div class="desc">
            <input
              className="create-task-input"
              type="text"
              name="description"
              value={newTask.description || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <input type="submit" />
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
