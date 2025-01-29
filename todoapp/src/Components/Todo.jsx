import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoListComponent";
import Footer from "./Footer";

export default function Todo() {
  var [todos, setTodos] = useState([]);
  var completedTodos = todos.filter((todo) => todo.done).length;
  var IncompletedTodos = todos.filter((todo) => !todo.done).length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
      <Footer
        completedTodos={completedTodos}
        IncompletedTodos={IncompletedTodos}
      />
    </div>
  );
}
