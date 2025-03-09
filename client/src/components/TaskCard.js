import { Link } from "react-router-dom";

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
        <Link className="link" to={`/edit/${task._id}`}>
            <button>Edit Task</button>
        </Link>
        <button onClick={() => deleteTask(task._id)}>Delete Task</button>
      </div>
    </div>
  );
}

export default TaskCard;