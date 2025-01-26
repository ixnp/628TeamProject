import TaskCard from "./TaskCard";
function TaskForm({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard {...task} />
      ))}
    </>
  );
}

export default TaskForm;
