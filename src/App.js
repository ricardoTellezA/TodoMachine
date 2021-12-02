// import './App.css';
import TodoConter from "./TodoConter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButtom from "./CreateTodoButtom";
import { useState } from "react";

const defaultTodos = [
  { text: "Hacer la compra", isCompleted: false },
  { text: "Tomar el curso de React", isCompleted: true },
  { text: "Tengo miedo", isCompleted: false },
];
function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [search, setSearch] = useState("");

  const completeTodos = todos.filter((todo) => !!todo.isCompleted).length;
  const totalTodos = todos.length;

  let searchTodos = [];
  if (!search.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const SearchText = search.toLowerCase();
      return todoText.includes(SearchText);
    });
  }
  return (
    <>
      <TodoConter total={totalTodos} completed={completeTodos} />

      <TodoSearch search={search} setSearch={setSearch} />

      <TodoList>
        {searchTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </>
  );
}

export default App;
