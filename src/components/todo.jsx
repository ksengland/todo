function Todo({ todo, index, remove }) {
    function handle() {
      console.log("Ping:", index);
      remove(index);
    }
    return (
      <div className="todo" onClick={handle}>
        <label>
          <input type="checkbox" />
          {todo.text}
        </label>
      </div>
    );
  }

  export default Todo;