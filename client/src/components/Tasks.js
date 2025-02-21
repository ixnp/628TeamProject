import TaskList from "./TaskList";
import {useState} from "react";

function TaskForm({ tasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selelectedSort, setSelectedSort] = useState("dueDateDescending")
  
  const updateSelectedCategory = (event) => {
      setSelectedCategory(event.target.value);
  };

  const updateSelectedSort = (event) => {
      setSelectedSort(event.target.value)
  }

  return (
    <>
      <h1>To-Do List</h1>
      <select
        onChange={updateSelectedCategory}>
        <option value="All">All Categories</option>      
        <option value="Appointment">Appointment</option> 
        <option value="Event">Event</option>
        <option value="School">School</option>
        <option value="Social">Social</option>
        <option value="Work">Work</option>
      </select>
      <select
        onChange={updateSelectedSort}>
        <option value="dueDateDescending">Due Sooner</option>
        <option value="dueDateAscending">Due Later</option>
        <option value="priorityDescending">Priority: Highest to Lowest</option>      
        <option value="priorityAscending">Priority: Lowest to Highest</option> 
        <option value="alphabetDescending">Alphabetical: Highest to Lowest</option>
        <option value="alphabetAscending">Alphabetical: Lowest to Highest</option>
      </select>

      <TaskList tasks={tasks} category={selectedCategory} sort={selelectedSort}/>
    </>
  );
}

export default TaskForm;
