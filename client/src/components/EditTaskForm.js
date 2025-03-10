import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { isTaskValid } from "./TaskUtils";
import { backendURL } from "../data/backendURL";
import "../styles/Form.css";
 
export default function EditTaskForm() {
    const params = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({ 
        taskName: "",
        dueDate: "",
        dueTime: "23:59",
        priority: 0,
        taskType: "Appointment",
        description: ""}
    );

    function handleChange(event) {
        const name = event.target.name;     // The updated field name.
        const value = event.target.value;   // The updated field's new value.
        setTask((values) => ({ ...values, [name]: value }));
    };
 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${backendURL}/${params.id}`);
  
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const task = await response.json();
      if (!task) {
        window.alert(`Task not found.`);
        navigate("/");
        return;
      }
      setTask(task);
    }
  
    fetchData();
    return;
  }, [params.id, navigate]);

    async function handleSubmit(event) {
        event.preventDefault();
        if(isTaskValid(task)) {  
            await fetch(`${backendURL}/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
            })
            .catch(error => {
            window.alert(error);
            return;
            });
        
            setTask({ 
            taskName: "",
            dueDate: "",
            dueTime: "23:59",
            priority: 0,
            taskType: "Appointment",
            description: ""});
            navigate("/");
        }
    };


  return (
    <form onSubmit={handleSubmit}>
      <div class="form-global">
        <h1>Edit Task</h1>
        <div class="wrapper">
          <div class="name-label">
            <label>Task Name:</label>
          </div>

          <div class="name">
            <input
              className="create-task-input"
              type="text"
              name="taskName"
              value={task.taskName || ""}
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
              value={task.dueDate || ""}
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
              value={task.dueTime || ""}
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
              value={task.priority || ""}
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
              value={task.taskType || "Appointment"}
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
            <textarea
              className="create-task-input"
              type="text"
              name="description"
              value={task.description || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <br/>
          <input type="submit" value="Update Task"/>
        </div>
      </div>
    </form>
  );
}