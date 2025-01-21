import logo from './logo.svg';
import './App.css';
import TaskForm from './pages/CreateTaskPage';
import React, {useState} from "react";

function App() {
  const [text, setText] = useState('');
  // TODO: Determine if we want to do an MPA or SPA. Adjust this code block accordingly.
  return (
    <div>
      <h1>628 Group Project - Untitled</h1>
      <CreateNewTaskButton/>
      <p>{text}</p> 
    </div>
  )

  function CreateNewTaskButton () {

    function handleClick() {
      return (
        setText(<TaskForm/>)
      );
    }
    
    return (
      <button onClick={handleClick}>
        Create New Task
      </button>
    )
  }
}



export default App;
