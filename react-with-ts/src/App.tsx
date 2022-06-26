import { useEffect } from "react";
import Todo from "./components/todo";

export default function App() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log("Please run the following command in production");
    }
  }, []);

  return (
    <>
      <Todo />
    </>
  );
}
