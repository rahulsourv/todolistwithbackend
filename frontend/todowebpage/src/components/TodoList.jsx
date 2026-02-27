import React from "react";

function TodoList({ todos, startEdit, deleteTodo, toggleComplete }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <div className="left">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo)}
            />
            <span>{todo.title}</span>
          </div>

          <div className="actions">
            <button onClick={() => startEdit(todo)} className="edit-btn">
              Edit
            </button>

            <button
              onClick={() => deleteTodo(todo._id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;