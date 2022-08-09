import React from "react";
import { api } from "../api";
// user input - includes validation
function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      api.createItem(value).then((persistedItem) => {
        if (!value) return;
      addTodo(value);
      setValue("");
      })
      
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="new-todo">add a thing</label> */}
        <input
          id="new-todo"
          type="text"
          className="input"
          value={value}
          placeholder="Add a thing"
          onChange={(e) => setValue(e.target.value)}
        />
        <button>
          Add
        </button>
      </form>
    );
  }

  export default TodoForm;