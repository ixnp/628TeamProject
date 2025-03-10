//Fetch All Tasks
export const getTasksRequest = async (setter) => {
  let res = await fetch("http://localhost:5050/task");
  let data = await res.json();
  setter(data);
};

export const postTaskRequest = async (task) => {
  let res = await fetch("http://localhost:5050/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  let data = await res.json();
  return data;
};

export const deleteTaskRequest = async (id) => {
  let res = await fetch(`http://localhost:5050/task/${id}`, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
  return;
};
