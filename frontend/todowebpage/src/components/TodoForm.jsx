import React from "react";

function TodoForm({ title, setTitle, editingId, createTodo, updateTodo }) {
  return (
    <div className="input-section">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo..."
      />

      {editingId ? (
        <button className="update-btn" onClick={updateTodo}>
          Update
        </button>
      ) : (
        <button className="add-btn" onClick={createTodo}>
          Add
        </button>
      )}
    </div>
  );
}

export default TodoForm;