import logo from './logo.svg';
import './App.css';
import Form from './Task';

function App() {
  return (
    <div>
      <h1>628 Group Project - Untitled</h1>
      <CreateNewTaskButton/>
      <Form/>
    </div>
  )
}

function CreateNewTaskButton () {

  function handleClick() {
    return (
      <Form/>
    );
  }
  
  return (
    <button onClick={handleClick}>
      Create New Task
    </button>
  )
}

export default App;
