import DeleteIcon from "@material-ui/icons/Delete";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";

const TodoListItem = (props) => {
  const deleteIconClickHandler = () => {
    props.onDelete(props.taskId);
  };
  const editIconClickHandler = () => {
    props.onEdit({ id: props.taskId, taskTitle: props.taskName });
  };
  return (
    <ListItem>
      <ListItemText primary={props.taskName} />
      <ListItemSecondaryAction>
        <IconButton
          onClick={editIconClickHandler}
          edge="end"
          aria-label="edit"
          margin="dense"
        >
          <EditOutlined color="primary" />
        </IconButton>
        <IconButton
          onClick={deleteIconClickHandler}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoListItem;
