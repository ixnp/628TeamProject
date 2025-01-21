import React, {useState} from "react";
import './../App.css'

function TaskForm () {
    const [inputs, setInputs] = useState({});
        
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        // TODO: Data validation.
        // TODO: Add Task to Database.
      }
    
      return (
        <form onSubmit={handleSubmit}>
            <h1>Create New Task</h1>
            <div class="wrapper">
                <div class="one">
                    <label>Task Name:</label>
                </div>
                <div class="two">
                    <input  className="create-task-input"
                            type="text" 
                            name="taskName" 
                            maxLength="16"
                            value={inputs.taskName || ""} 
                            onChange={handleChange}
                    />
                </div>
                <div class="three">
                    <label>Due Date:</label>
                </div>
                <div class="four">
                    <input  className="create-task-input"
                        type="date" 
                        name="dueDate" 
                        value={inputs.dueDate || ""} 
                        onChange={handleChange}
                    />
                </div>
                <div class="five">
                    <label>Due Time:</label>
                </div>
                <div class="six">
                    <input  className="create-task-input"
                            type="time" 
                            name="dueTime" 
                            value={inputs.dueTime || ""} 
                            onChange={handleChange}
                    />
                </div>
                <div class="seven">
                    <label>Priority:</label>
                </div>
                <div class="eight">
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
                <div class="nine">
                    <label>Category:</label>
                </div>
                <div class="ten">
                    <div>
                        <select className="create-task-input"
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
                </div>
                <div class="eleven">
                    <label>Description:</label>
                </div>
                <div class="twelve">
                    <div>
                        <input  className="create-task-input"
                                type="text" 
                                name="description" 
                                value={inputs.description || ""} 
                                onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div>
                <input type="submit" />
            </div>
        </form>
      );
}

export default TaskForm