function TaskCard({ task, deleteTask }) {
  return (
    <div className="task-card">
      <h2>{task.taskName}</h2>
      <ul>
        <li>Priority: {task.priority}</li>
        <li>Task Type: {task.taskType}</li>
        <li>Due Date: {task.dueDate} <span>{task.dueTime}</span></li>
        <li>Description: {task.description}</li>
      </ul>
      <div className="task-buttons">
        <button onClick={() => deleteTask(task._id)}>Delete Task</button>
        <button>Edit Task</button>
      </div>
    </div>
  );
}

export default TaskCard;