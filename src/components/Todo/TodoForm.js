import { useEffect, useState } from "react";
import SimpleCard from "../UI/SimpleCard";
import { InputLabel, FormControl, Input } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const TodoForm = (props) => {
  const classes = useStyles();

  const [todoItem, setTodoItem] = useState("");
  useEffect(() => {
    if (props.value) {
      setTodoItem(props.value.taskTitle);
    }
    //console.log(props.onEdit);
  }, []);

  const onChangeHandler = (event) => {
    setTodoItem(event.target.value);
    //console.log(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (props.value) {
      props.onUpdate({ id: props.value.id, taskTitle: todoItem });
    } else {
      props.onAdd({ taskTitle: todoItem });
    }

    // console.log(todoItem);
    setTodoItem("");
  };

  return (
    <SimpleCard title={props.title}>
      <form onSubmit={onSubmitHandler}>
        <FormControl
          margin="dense"
          required={true}
          size="medium"
          variant="filled"
        >
          <InputLabel htmlFor="task" margin="dense" variant="outlined">
            Enter You Todo Task
          </InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={onChangeHandler}
            value={todoItem}
          />
          <Fab
            variant="extended"
            color="primary"
            type="submit"
            className={classes.margin}
          >
            {!props.value && <AddIcon></AddIcon>}
            {props.value && <EditRoundedIcon></EditRoundedIcon>}
          </Fab>
        </FormControl>
      </form>
    </SimpleCard>
  );
};

export default TodoForm;
