import TaskList from "./TaskList";
import { useState } from "react";
import { getTaskTime } from "./TaskUtils";

//Sorts task
function SortTaskMenu({ tasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("dueDateDescending");

  const updateSelectedCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const updateSelectedSort = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <>
      <h1>To-Do List</h1>
      <select onChange={updateSelectedCategory}>
        <option value="All">All Categories</option>
        <option value="Appointment">Appointment</option>
        <option value="Event">Event</option>
        <option value="School">School</option>
        <option value="Social">Social</option>
        <option value="Work">Work</option>
      </select>
      <select onChange={updateSelectedSort}>
        <option value="dueDateDescending">Due Sooner</option>
        <option value="dueDateAscending">Due Later</option>
        <option value="priorityDescending">Priority: Highest to Lowest</option>
        <option value="priorityAscending">Priority: Lowest to Highest</option>
        <option value="alphabetDescending">
          Alphabetical: Highest to Lowest
        </option>
        <option value="alphabetAscending">
          Alphabetical: Lowest to Highest
        </option>
      </select>

      <TaskList tasks={sort(tasks)} category={selectedCategory} />
    </>
  );

  /*
   * Sort functions.
   */
  function compareTasks(taskOne, taskTwo) {
    switch (selectedSort) {
      case "dueDateAscending":
        return sortDueDateAscending(taskOne, taskTwo);
      case "priorityDescending":
        return sortPriorityDescending(taskOne, taskTwo);
      case "priorityAscending":
        return sortPriorityAscending(taskOne, taskTwo);
      case "alphabetDescending":
        return sortAlphabetDescending(taskOne, taskTwo);
      case "alphabetAscending":
        return sortAlphabetAscending(taskOne, taskTwo);
      default:
        return sortDueDateDescending(taskOne, taskTwo);
    }
  }

  function sortDueDateDescending(taskOne, taskTwo) {
    return getTaskTime(taskOne) < getTaskTime(taskTwo);
  }

  function sortDueDateAscending(taskOne, taskTwo) {
    return getTaskTime(taskOne) < getTaskTime(taskTwo);
  }

  function sortPriorityDescending(taskOne, taskTwo) {
    return taskOne.priority < taskTwo.priority;
  }

  function sortPriorityAscending(taskOne, taskTwo) {
    return taskOne.priority > taskTwo.priority;
  }

  function sortAlphabetDescending(taskOne, taskTwo) {
    return taskOne.taskName < taskTwo.taskName;
  }

  function sortAlphabetAscending(taskOne, taskTwo) {
    return taskOne.taskName > taskTwo.taskName;
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
    let i = 0,
      j = 0;

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

export default SortTaskMenu;
