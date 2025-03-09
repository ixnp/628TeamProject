import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "./navbar";
import "../styles/create.css";
import { backendURL } from "../data/backendURL";
 
export default function Edit() {
    const params = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({ 
        taskName: "",
        dueDate: "",
        dueTime: "23:59",
        priority: 0,
        taskType: "Appointment",
        description: ""}
    );

    function handleChange(event) {
        const name = event.target.name;     // The updated field name.
        const value = event.target.value;   // The updated field's new value.
        setTask((values) => ({ ...values, [name]: value }));
    };
 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${backendURL}${params.id.toString()}`);
  
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const task = await response.json();
      if (!task) {
        window.alert(`Task not found.`);
        navigate("/");
        return;
      }
      setTask(task);
    }
  
    fetchData();
    return;
  }, [params.id, navigate]);

    async function handleSubmit(event) {
        event.preventDefault();
        if(isTaskValid(task)) {  
            await fetch(`${backendURL}/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
            })
            .catch(error => {
            window.alert(error);
            return;
            });
        
            setNewTask({ 
            taskName: "",
            dueDate: "",
            dueTime: "23:59",
            priority: 0,
            taskType: "Appointment",
            description: ""});
        }
    };
 
  async function onSubmit(e) {
    e.preventDefault();
    const editRecipe = {
      name: form.name,
      ingredients: form.ingredients,
      cooking: form.cooking,
      notes: form.notes,
    };
  
    await fetch(`${backendUrl}/record/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(editRecipe),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    navigate("/");
  }

  return (
      <div>
        <Navbar/>
        <form onSubmit={onSubmit}>
          <div className="form-global">
            <h3>Edit Recipe</h3>
            <div className="grid">
              <label className="label1" htmlFor="name">Name:</label>
              <input
                className="item1"
                type="text"
                id="name"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
              />
              
              <label className="label2" htmlFor="ingredients">Ingredients:</label>
              <textarea
                className="item2"
                type="text"
                id="ingredients"
                value={form.ingredients}
                onChange={(e) => updateForm({ ingredients: e.target.value })}
              />
  
              <label className="label3" htmlFor="cooking">Instructions:</label>
              <textarea
                className="item3"
                type="text"
                id="cooking"
                value={form.cooking}
                onChange={(e) => updateForm({ cooking: e.target.value })}
              />
  
              <label className="label4" htmlFor="notes">Notes:</label>
              <textarea
                className="item4"
                type="text"
                id="notes"
                value={form.notes}
                onChange={(e) => updateForm({ notes: e.target.value })}
              />
            </div>  
            <input
              type="submit"
              value="Update Recipe"
              className="add-recipe"
            />
          </div>
        </form>
      </div>
    );
}