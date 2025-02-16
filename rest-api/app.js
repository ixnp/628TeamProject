const express = require('express');
const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Simulated task storage
let tasks = [];

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });


app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });

 app.get("/user", (request, response) => {
  const user = {
    "Name": "Corin",
    "Email": "cori@yahoo.com",
    "Role": "Engineer"
  };
  response.send(user);
 });

 app.post("/login", (request, response) => {
  const { email, password } = request.body;

  // Dummy user credentials for validation
  const dummyUser = {
   email: "cori@yahoo.com",
   password: "password123" // In a real application, passwords should be hashed
  };

  if (email === dummyUser.email && password === dummyUser.password) {
    response.json({ message: "Login successful", status: "success" });
  } else {
    response.status(401).json({ message: "Invalid credentials", status: "error" });
  }
});

app.post("/postTask", (request, response) => {
  const { description, dueDate, dueTime, priority, taskName, taskType } = request.body;

  // Simple validation check
  if (!description || !dueDate || !dueTime || !priority || !taskName || !taskType) {
    return response.status(400).json({ message: "All fields are required", status: "error" });
  }

  // Simulated task storage (In a real application, save this to a database)
  const newTask = {
    description: "Dinner with friends at the new Italian restaurant downtown.",
    dueDate: "2025-01-27",
    dueTime: "19:30",
    priority: 3,
    taskName: "Dinner with Friends",
    taskType: "Social",
  };

  console.log("New Task Added:", newTask); // Log the task to the console
  
  response.json({ message: "Task added successfully", status: "success", task: newTask });
  
});


// Get all tasks
app.get("/tasks", (request, response) => {
    response.json({ tasks });
  });
  
  // Get a single task by taskName
  app.get("/tasks/name/:taskName", (request, response) => {
    const task = tasks.find(t => t.taskName === request.params.taskName);
    if (!task) {
      return response.status(404).json({ message: "Task not found", status: "error" });
    }
    response.json({ task });
  });

  // Update a task by taskName
app.put("/tasks/name/:taskName", (request, response) => {
    const task = tasks.find(t => t.taskName === request.params.taskName);
    if (!task) {
      return response.status(404).json({ message: "Task not found", status: "error" });
    }
  
    const { description, dueDate, dueTime, priority, taskName, taskType } = request.body;
    
    if (!description || !dueDate || !dueTime || !priority || !taskName || !taskType) {
      return response.status(400).json({ message: "All fields are required", status: "error" });
    }
  
    task.description = description;
    task.dueDate = dueDate;
    task.dueTime = dueTime;
    task.priority = priority;
    task.taskName = taskName;
    task.taskType = taskType;
  
    response.json({ message: "Task updated successfully", status: "success", task });
  });
  
  // Delete a task by taskName
  app.delete("/tasks/name/:taskName", (request, response) => {
    const taskIndex = tasks.findIndex(t => t.taskName === request.params.taskName);
    if (taskIndex === -1) {
      return response.status(404).json({ message: "Task not found", status: "error" });
    }
    
    tasks.splice(taskIndex, 1);
    response.json({ message: "Task deleted successfully", status: "success" });
  });





 app._router