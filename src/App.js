import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "./firebase";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      // timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
    });
    // setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /> */}
      <form>
        <FormControl>
          <InputLabel>write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add task
        </Button>
        {/* <button type="submit" onClick={addTodo}>
          Add task
        </button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo}></Todo>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
