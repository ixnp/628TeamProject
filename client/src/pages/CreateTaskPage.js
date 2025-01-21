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
        // TODO: Add Task to Database.
      }
    
      return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Create New Task</h1>
                <label>Task Name:
                <input  className="create-task-input"
                        type="text" 
                        name="taskName" 
                        maxLength="16"
                        value={inputs.taskName || ""} 
                        onChange={handleChange}
                />
                </label>
            </div>

            <div>
                <label>Due Date:
                <input  className="create-task-input"
                        type="date" 
                        name="dueDate" 
                        value={inputs.dueDate || ""} 
                        onChange={handleChange}
                />
                </label>
            </div>

            <div>
                <label>Time:
                <input  className="create-task-input"
                        type="time" 
                        name="dueTime" 
                        value={inputs.dueTime || ""} 
                        onChange={handleChange}
                />
                </label>
            </div>

            <div>
                <label>Priority:
                    <input  className="create-task-input"
                            type="number" 
                            name="priority" 
                            min="0"
                            max="5"
                            step="1"
                            value={inputs.priority || ""} 
                            onChange={handleChange}
                    />
                    </label>
            </div>

            <div>
                <label>Category:
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
                </label>
            </div>
          
            <div>
                <label>Description:
                    <input  className="create-task-input"
                            type="text" 
                            name="description" 
                            value={inputs.description || ""} 
                            onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
      );
}

export default TaskForm