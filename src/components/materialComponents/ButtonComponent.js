import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function ButtonComponent(props) {
  const useStyles = makeStyles({
    btn: {
      marginTop: props.topmove,
      marginLeft: props.leftmove,
    },
  });
  const classes = useStyles();
  return (
    <div className="d-block m-auto">
      <Button variant="contained" color={props.color} className={classes.btn}>
        {props.value}
      </Button>
    </div>
  );
}

export default ButtonComponent;
