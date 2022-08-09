import React from "react";
import "./App.css";
import Todo from "./components/todo";
import TodoForm from "./components/form";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Wash dishes",
      isCompleted: false,
    },
    {
      text: "Fold laundry",
      isCompleted: false,
    },
    {
      text: "Take out trash",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <div className="app">
      <div className="todo-list">
        <h1>Things to Do</h1>
        {todos.map((todo, i) => (
          <Todo index={i} key={i} todo={todo} remove={removeTodo} />
        ))}
        <br></br>
        <TodoForm addTodo={addTodo}></TodoForm>
      </div>
    </div>
  );
}

export default App;
