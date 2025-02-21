import React, {useState} from "react"

export default function TaskList() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selelectedSort, setSelectedSort] = useState()
    
    const updateSelectedCategory = (event) => {
        setSelectedCategory(event.target.value);
    };

    const updateSelectedSort = (event) => {
        setSelectedSort(event.target.value)
    }

    return (
        <div className="global">
            <h1>To-Do List</h1>
            <select className="category-select"
                    onChange={updateSelectedCategory}>
                        <option value="All">All Genres</option>      
                        <option value="Action">Action</option> 
                        <option value="Comedy">Comedy</option>
                        <option value="Musical">Musical</option>
                        <option value="Sci-Fi">Sci-Fi</option>
            </select>
            <select className="sort-select"
                    text="Sort by:"
                    onChange={updateSelectedSort}>
                        <option value="All">All Genres</option>      
                        <option value="Action">Action</option> 
                        <option value="Comedy">Comedy</option>
                        <option value="Musical">Musical</option>
                        <option value="Sci-Fi">Sci-Fi</option>
            </select>
        </div>
    )
}
