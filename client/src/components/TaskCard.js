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
        <li>Priorty: {priority}</li>
        <li>Task Type:{taskType}</li>
        <li>Priorty: {priority}</li>
        <li>
          Due Date: {dueDate} <span>Time: {dueTime}</span>
        </li>
        <li>Description: {description}</li>
      </ul>
    </div>
  );
}

export default TaskCard;
