export const defaultTask = {
    taskName: "",
    dueDate: "",
    dueTime: "23:59",
    priority: 0,
    taskType: "Appointment",
    description: "",
}

export function isTaskValid(newTaskData) {

    if(!newTaskData.taskName.trim()) {
        alert("ERROR: Task cannot have an empty name.")
        return false;
    }

    if(!newTaskData.dueDate.trim()) {
        alert("ERROR: Task must have a due date.")
        return false;  
    }

    if(!newTaskData.dueTime.trim()) {
        alert("ERROR: Task must have a due time.")
        return false; 
    }

    let dueDate = getTaskTime(newTaskData);
    let today = new Date();
    if(dueDate < today) {
        alert("ERROR: Task is overdue.")
        return false;
    }

    if(newTaskData.priority === 0){
        alert("ERROR: Task must have a priority.")
        return false; 
    }

    if(!newTaskData.taskType.trim()){
        alert("ERROR: Task must have a category.")
        return false; 
    }

    return true;   
};

export function getTaskTime(task) {
    const[year, month, day] = task.dueDate.split("-");
    const[hour, minute] = task.dueTime.split(":");
    return new Date(year, month-1, day, hour, minute, 0);
}