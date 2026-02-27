import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get(`${API}/api/todos`);
    setTodos(res.data);
  };

  const createTodo = async () => {
    if (!title.trim()) return;

    await axios.post(`${API}/api/todos`, { title });
    setTitle("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/api/todos/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (todo) => {
    await axios.put(
      `${API}/api/todos/${todo._id}`,
      { completed: !todo.completed }
    );
    fetchTodos();
  };

  const startEdit = (todo) => {
    setEditingId(todo._id);
    setTitle(todo.title);
  };

  const updateTodo = async () => {
    if (!title.trim()) return;

    await axios.put(
      `${API}/api/todos/${editingId}`,
      { title }
    );

    setTitle("");
    setEditingId(null);
    fetchTodos();
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1 className="title">Todo App</h1>

      <TodoForm
        title={title}
        setTitle={setTitle}
        editingId={editingId}
        createTodo={createTodo}
        updateTodo={updateTodo}
      />

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TodoList
        todos={filteredTodos}
        startEdit={startEdit}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;