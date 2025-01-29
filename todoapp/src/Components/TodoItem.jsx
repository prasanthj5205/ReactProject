import styles from "./ToDoList.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete Item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    var newSetodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    console.log("item clicked", newSetodos);
    setTodos(newSetodos);
  }
  var className = item.done ? styles.underLine : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
}
