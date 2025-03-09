import TaskCard from "./TaskCard";

export default function TaskList({tasks, category, deleteTask}) { 
    function doRenderTask(task, category) {
        return (category === task.taskType) || (category === "All")
    }
    
    return (
        tasks.map((task) => {
            return ( 
                <>  
                    {(doRenderTask(task, category) && (<TaskCard {...task} deleteTask={deleteTask}/>))}
                </>
            )
        })
    );
}
