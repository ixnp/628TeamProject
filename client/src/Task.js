import {useState} from 'react'

function TaskForm () {
    const [inputs, setInputs] = useState({});
        
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        // TODO: Add Task to Database.
        event.preventDefault();
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Create New Task</h1>
            <label>Task Name:
              <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>Due Date:
              <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}
              />
              </label>
          </div>
          <div>
            <label>Time:
              <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}
              />
              </label>
          </div>
          <div>
          <label>Priority:
            <input 
              type="number" 
              name="age" 
              value={inputs.age || ""} 
              onChange={handleChange}
            />
            </label>
        </div>

        <div>
          <label>Category:
            <input 
              type="number" 
              name="age" 
              value={inputs.age || ""} 
              onChange={handleChange}
            />
            </label>
        </div>
          
          <div>
            <label>Description:
              <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
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