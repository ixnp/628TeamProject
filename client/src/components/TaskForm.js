import TaskList from "./TaskList";
import {useState} from "react";

function TaskForm({ tasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("dueDateDescending")
  
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

      <TaskList tasks={sort(tasks)} category={selectedCategory}/>
    </>
  );

  /*
   * Sort functions.
   */
  function compareTasks(taskOne, TaskTwo) {
    switch(selectedSort) {
      case "dueDateAscending":
        return sortDueDateAscending(taskOne, TaskTwo);
      case "priorityDescending":
        return sortPriorityDescending(taskOne, TaskTwo);
      case "priorityAscending":
        return sortPriorityAscending(taskOne, TaskTwo);
      case "alphabetDescending":
        return sortAlphabetDescending(taskOne, TaskTwo);
      case "alphabetAscending":
        return sortAlphabetAscending(taskOne, TaskTwo);
      default:
        return sortDueDateDescending(taskOne, TaskTwo);
    }
  }

  function sortDueDateDescending(taskOne, TaskTwo) {
    return taskOne.dueDate < TaskTwo.dueDate;
  }

  function sortDueDateAscending(taskOne, TaskTwo) {
    return taskOne.dueDate > TaskTwo.dueDate;
  }

  function sortPriorityDescending(taskOne, TaskTwo) {
    return taskOne.priority < TaskTwo.priority;
  }

  function sortPriorityAscending(taskOne, TaskTwo) {
    return taskOne.priority > TaskTwo.priority;
  }

  function sortAlphabetDescending(taskOne, TaskTwo) {
    return taskOne.taskName < TaskTwo.taskName;
  }

  function sortAlphabetAscending(taskOne, TaskTwo) {
    return taskOne.taskName > TaskTwo.taskName;
  }

  function sort(tasks) {
    if (tasks.length <= 1) {
      return tasks;
    }
  
    const index = Math.floor(tasks.length / 2);
    const left = tasks.slice(0, index);
    const right = tasks.slice(index);
  
    return merge(sort(left), sort(right));
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
      if (compareTasks(left[i], right[j])) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return [...result, ...left.slice(i), ...right.slice(j)];
  }
}

export default TaskForm;
