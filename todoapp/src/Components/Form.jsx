import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  //var [todo, setTodo] = useState("");
  var [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.modernform}
          type="text"
          placeholder="Enter To Do Item..."
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
        ></input>
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
