import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
function SecondInputComponent(props) {
  const useStyles = makeStyles({
    text: {
      width: props.width,
      height: props.height,
      marginLeft: props.move,
      backgroundColor: props.col,
    },
  });
  const classes = useStyles();
  return (
    <div>
      <form>
        <TextField
          className={classes.text}
          id="outlined-basic"
          label={props.label}
          variant="outlined"
          placeholder={props.placeholder}
          type={props.type}
          autoComplete={props.autoComplete}
        />
      </form>
    </div>
  );
}

export default SecondInputComponent;
