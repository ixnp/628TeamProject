function TaskCard(task) {
  return (
    <div>
      <h2>{task.taskName}</h2>
      <ul>
        <li>Priority: {task.priority}</li>
        <li>Task Type: {task.taskType}</li>
        <li>
          Due Date: {task.dueDate} <span>{task.dueTime}</span>
        </li>
        <li>Description: {task.description}</li>
        <button>Delete Task</button>
        <button>Edit Task</button>
      </ul>
    </div>
  );
}

export default TaskCard;