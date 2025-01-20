import logo from './logo.svg';
import './App.css';
import TaskForm from './Task';

function App() {
  return (
    <div>
      <h1>628 Group Project - Untitled</h1>
      <CreateNewTaskButton/>
      <TaskForm/>
    </div>
  )
}

function CreateNewTaskButton () {

  function handleClick() {
    return (
      <TaskForm/>
    );
  }
  
  return (
    <button onClick={handleClick}>
      Create New Task
    </button>
  )
}

export default App;
