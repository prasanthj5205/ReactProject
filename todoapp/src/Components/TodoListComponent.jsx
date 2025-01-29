import TodoItem from "./TodoItem";
import styles from "./ToDoItem.module.css";
export default function TodoList({ todos, setTodos }) {
  var sortedTodods = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodods.map((item) => (
        <TodoItem
          todos={todos}
          key={item.name}
          item={item}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
