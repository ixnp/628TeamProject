import React, {useState} from "react";
import './CreateTaskPage.css'

function TaskForm () {
    const [inputs, setInputs] = useState({});
        
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        // TODO #1: Data validation.
        // TODO #2: Add Task to Database.
      }
    
      return (
        <form onSubmit={handleSubmit}>
            <div class="form-global">
                <h1>Create New Task</h1>
                <div class="wrapper">

                    <div class="name-label">
                        <label>Task Name:</label>
                    </div>

                    <div class="name">
                        <input  className="create-task-input"
                                type="text" 
                                name="taskName" 
                                maxLength="16"
                                value={inputs.taskName || ""} 
                                onChange={handleChange}
                        />
                    </div>

                    <div class="date-label">
                        <label>Due Date:</label>
                    </div>

                    <div class="date">
                        <input  className="create-task-input"
                            type="date" 
                            name="dueDate" 
                            value={inputs.dueDate || ""} 
                            onChange={handleChange}
                        />
                    </div>

                    <div class="time-label">
                        <label>Due Time:</label>
                    </div>

                    <div class="time">
                        <input  className="create-task-input"
                                type="time" 
                                name="dueTime" 
                                value={inputs.dueTime || ""} 
                                onChange={handleChange}
                        />
                    </div>

                    <div class="priority-label">
                        <label>Priority:</label>
                    </div>

                    <div class="priority">
                        <input  className="create-task-input"
                                type="number" 
                                name="priority" 
                                min="0"
                                max="5"
                                step="1"
                                value={inputs.priority || ""} 
                                onChange={handleChange}
                        />
                    </div>

                    <div class="category-label">
                        <label>Category:</label>
                    </div>

                    <div class="category">
                        <select className="create-task-select"
                                type="text" 
                                name="taskType" 
                                value={inputs.taskType || ""} 
                                onChange={handleChange}>
                            <option value="appointment">Appointment</option> 
                            <option value="event">Event</option>
                            <option value="school">School</option>
                            <option value="social">Social</option>
                            <option value="work">Work</option>      
                        </select>
                    </div>

                    <div class="desc-label">
                        <label>Description:</label>
                    </div>

                    <div class="desc">
                        <input  className="create-task-input"
                                type="text" 
                                name="description" 
                                value={inputs.description || ""} 
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

export default TaskForm