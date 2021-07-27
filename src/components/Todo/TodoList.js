import { List } from "@material-ui/core";
import SimpleCard from "../UI/SimpleCard";
import TodoListItem from "./TodoListItem";
import { Typography } from "@material-ui/core";
const TodoList = (props) => {
  const tasksList = props.tasks.map((task) => {
    // console.log(task);
    return (
      <TodoListItem
        onDelete={props.onDelete}
        onEdit={props.onEdit}
        key={task.id}
        taskName={task.taskTitle}
        taskId={task.id}
      />
    );
  });
  const hasItems = props.tasks.length > 0;
  return (
    <SimpleCard title={hasItems ? props.title : ""}>
      {hasItems && <List>{tasksList}</List>}
      {!hasItems && (
        <Typography
          align="center"
          color="secondary"
          variant="h5"
          component="h4"
          gutterBottom={true}
        >
          No Tasks Available
        </Typography>
      )}
    </SimpleCard>
  );
};

export default TodoList;
