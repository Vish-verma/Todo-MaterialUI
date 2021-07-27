import TodoForm from "./components/Todo/TodoForm";
import React, { Fragment, useEffect, useState } from "react";
import TodoList from "./components/Todo/TodoList";
import {
  addTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "./helpers/firebaseHelper";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editState, setEditState] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [onUpdate, setOnUpdate] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const task = await getTodo();
      // console.log(task);
      setTasks(task);
    };
    getData();
    //
  }, [onUpdate]);

  // console.log(tasks);
  const onAddTaskHandler = async (task) => {
    // setTasks((prev_state) => {
    //   return [...prev_state, task];
    // });
    addTodo(task);
    setOnUpdate(onUpdate + 1);
  };

  const onDeleteTaskHandler = (id) => {
    // setTasks((prev_state) => {
    //   return prev_state.filter((task) => task.id !== id);
    // });
    deleteTodo(id);
    setTimeout(() => {
      setOnUpdate(onUpdate + 1);
    }, 500);
  };

  const onEditTaskHandler = (task) => {
    setEditState(true);
    setEditValue(task);
    // console.log(task);
  };
  const onUpdateTaskHandler = (task) => {
    // console.log("UPDATE", task);
    updateTodo(task);
    setEditState(false);
    setTimeout(() => {
      setOnUpdate(onUpdate + 1);
    }, 250);
  };
  return (
    <Fragment>
      {!editState && (
        <TodoForm onAdd={onAddTaskHandler} title="Add your tasks" />
      )}
      {editState && (
        <TodoForm
          // onAdd={onAddTaskHandler}
          onUpdate={onUpdateTaskHandler}
          title="Edit task"
          value={editValue}
        />
      )}
      {!editState && (
        <TodoList
          tasks={tasks}
          onDelete={onDeleteTaskHandler}
          onEdit={onEditTaskHandler}
          title="To-do Items"
        />
      )}
    </Fragment>
  );
};

export default App;
