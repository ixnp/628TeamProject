export default function isTaskValid(newTaskData) {

    if(!newTaskData.taskName.trim()) {
        alert("ERROR: Task cannot have an empty name.")
        return false;
    }

    if((!newTaskData.dueDate.trim())) {
        alert("ERROR: Task must have a due date.")
        return false;  
    }

    if((!newTaskData.dueTime.trim())) {
        alert("ERROR: Task must have a due time.")
        return false; 
    }

    const[year, month, day] = newTaskData.dueDate.split("-");
    const[hour, minute] = newTaskData.dueTime.split(":");
    let dueDate = new Date(year, month-1, day, hour, minute, 0);
    let today = new Date();
    alert(dueDate)

    
    
    return true;
      
};



