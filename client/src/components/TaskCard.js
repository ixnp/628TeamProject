function TaskCard({
  description,
  dueDate,
  dueTime,
  priority,
  taskName,
  taskType,
}) {
  return (
    <div className="task-card">
      <h2>{taskName}</h2>
      <ul>
        <li>Priority: {priority}</li>
        <li>Task Type: {taskType}</li>
        <li>
          Due Date: {dueDate} <span>{dueTime}</span>
        </li>
        <li>Description: {description}</li>
      </ul>
      <div className="task-buttons">
        <button>Delete Task</button>
        <button>Edit Task</button>
      </div>
    </div>
  );
}

export default TaskCard;
