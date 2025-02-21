import TaskCard from "./TaskCard";
import {useState} from "react";

function TaskForm({ tasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
    const [selelectedSort, setSelectedSort] = useState()
    
    const updateSelectedCategory = (event) => {
        setSelectedCategory(event.target.value);
    };

    const updateSelectedSort = (event) => {
        setSelectedSort(event.target.value)
    }
  return (
    <>
      {tasks.map((task) => (
        <TaskCard {...task} />
      ))}
    </>
  );
}

export default TaskForm;
