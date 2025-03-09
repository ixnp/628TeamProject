function TaskCard({
  description,
  dueDate,
  dueTime,
  priority,
  taskName,
  taskType,
}) {
  return (
    <div>
      <h2>{taskName}</h2>
      <ul>
        <li>Priority: {priority}</li>
        <li>Task Type: {taskType}</li>
        <li>
          Due Date: {dueDate} <span>{dueTime}</span>
        </li>
        <li>Description: {description}</li>
        <button>Delete Task</button>
        <button>Edit Task</button>
      </ul>
    </div>
  );
}

export default TaskCard;