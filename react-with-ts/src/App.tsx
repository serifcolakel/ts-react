import React, { useEffect, useState } from "react";
import "./styles/App.scss";

export default function App() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log("Please run the following command in production");
    }
  }, []);
  type Todo = {
    name: string;
    description: string;
    isFinish: boolean;
  };

  let initialValue: Todo = {
    name: "",
    description: "",
    isFinish: false,
  };
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [values, setValues] = useState<Todo>(initialValue);

  function addTodo() {
    setTodos([...todos, values]);
    setValues(initialValue);
  }
  console.log(values, todos);

  return (
    <div className="App">
      <label htmlFor="todo">Entry Todo</label>
      <input
        id="todo"
        type="text"
        name="name"
        value={values.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({
            ...values,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <input
        id="todo"
        type="text"
        value={values.description}
        name="description"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({
            ...values,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <input
        id="todo"
        type="checkbox"
        name="isFinish"
        checked={values.isFinish}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({
            ...values,
            [e.target.name]: e.target.checked,
          });
        }}
      />
      <button disabled={!values.description || !values.name} onClick={addTodo}>
        Add
      </button>
      <table>
        <tr>
          {Object.keys(values).map((key: string, idx: number) => (
            <th key={idx}>{key.toUpperCase()}</th>
          ))}
        </tr>
        {todos.map((todo: Todo, idx: number) => (
          <tr key={idx}>
            <td>{todo.name}</td>
            <td>{todo.description}</td>
            <td>{todo.isFinish.toString()}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
