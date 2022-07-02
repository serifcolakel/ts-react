import React, { useEffect, useState } from "react";
import Button from "../button";
import "./todo.scss";

export default function Todo() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log("Please run the following command in production");
    }
  }, []);
  type Todo = {
    name: string;
    description: string;
    isDone: boolean;
  };

  let initialValue: Todo = {
    name: "",
    description: "",
    isDone: false,
  };
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [values, setValues] = useState<Todo>(initialValue);

  function addTodo() {
    setTodos([...todos, values]);
    setValues(initialValue);
  }
  function deleteTodo(name: string) {
    let _filteredTodos = todos.filter((t) => t.name !== name);
    setTodos(_filteredTodos);
  }
  function completeTodo(name: string) {
    const _completedTodo = todos.map((todos) => {
      // 👇️ if id equals 2, update country property
      if (todos.name === name) {
        return { ...todos, isDone: true };
      }

      // 👇️ otherwise return todosect as is
      return todos;
    });
    console.log(_completedTodo);
    setTodos(_completedTodo);
  }
  return (
    <div className="Todo">
      <label htmlFor="todo">Entry Todo</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Todo için Name giriniz"
        value={values.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({
            ...values,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <input
        id="description"
        type="text"
        placeholder="Description giriniz."
        value={values.description}
        name="description"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({
            ...values,
            [e.target.name]: e.target.value,
          });
        }}
      />

      <Button
        variant="secondary"
        disabled={values.description.length < 8 || values.name.length < 8}
        onClick={addTodo}
      >
        Ekle
      </Button>

      {todos.length > 0 && (
        <table>
          <tr>
            {Object.keys(values).map((key: string, idx: number) => (
              <th key={idx}>{key.toUpperCase()}</th>
            ))}
            <th>Action</th>
          </tr>
          <tbody>
            {todos.map((todo: Todo, idx: number) => (
              <tr key={idx}>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td>{todo.isDone ? "Bitti" : "Devam ediyor."}</td>
                <td>
                  <Button
                    variant="primary"
                    disabled={!todo.isDone}
                    onClick={() => deleteTodo(todo.name)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="primary"
                    disabled={false}
                    onClick={() => completeTodo(todo.name)}
                  >
                    completeTodoe
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
