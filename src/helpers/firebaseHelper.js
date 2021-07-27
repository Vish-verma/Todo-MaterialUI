const FIREBASE_URL =
  "https://to-do-e3413-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json";
const FIREBASE_URL_MODIFY =
  "https://to-do-e3413-default-rtdb.asia-southeast1.firebasedatabase.app/todo/";
export const getTodo = async () => {
  try {
    let response = await fetch(FIREBASE_URL);

    //console.log("MEALS");
    let data = await response.json();
    const loadedMeals = [];
    for (const key in data) {
      loadedMeals.push({
        id: key,
        taskTitle: data[key].taskTitle,
      });
    }

    return loadedMeals;
  } catch (err) {
    console.log("ERROR-->", err.message);
  }
};

export const addTodo = async (task) => {
  let response = await fetch(FIREBASE_URL, {
    method: "POST",
    body: JSON.stringify(task),
  });
  console.log(response.ok);
  if (!response.ok) {
    throw new Error("Couldn't Add Task");
  }
  return "Success";
};

export const updateTodo = async (task) => {
  //console.log(task);
  try {
    let response = await fetch(
      `${FIREBASE_URL_MODIFY}${task.id}/taskTitle.json`,
      {
        method: "PUT",
        body: task.taskTitle,
      }
    );
  } catch (err) {
    console.log(err.message);
  }
  return "Success";
};

export const deleteTodo = async (id) => {
  let response = await fetch(`${FIREBASE_URL_MODIFY}${id}.json`, {
    method: "DELETE",
    // body: task.id,
  });
  if (!response.ok) {
    throw new Error("Couldn't Delete Task");
  }
  let data = await response.json();
  return data;
};
