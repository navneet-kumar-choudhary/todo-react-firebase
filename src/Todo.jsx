import React from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import db from "./firebase";

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Todo" secondary={props.todo.todo}></ListItemText>
      </ListItem>
      <Button
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        Delete Me!
      </Button>
    </List>
  );
}

export default Todo;
