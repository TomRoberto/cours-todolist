import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { title: text, isDone: false }]);
    setText("");
  };

  return (
    <>
      {todos.map((todo, index) => {
        return (
          <div key={todo.title}>
            <input
              type="checkbox"
              onChange={() => {
                const newTodos = [...todos];
                newTodos[index].isDone = !newTodos[index].isDone;
                setTodos(newTodos);
              }}
            />
            <span className={todo.isDone ? "done" : ""}>{todo.title}</span>
            <button
              onClick={() => {
                const newTodos = [...todos];
                newTodos.splice(index, 1);
                setTodos(newTodos);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
