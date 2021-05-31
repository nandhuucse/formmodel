import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import InputComponent from "../materialComponents/InputComponent";
import SelectComponent from "../materialComponents/SelectComponent";
import "./Formcomponent.css";
import DemoComponent from "./DemoComponent";
import SecondInputComponent from "../materialComponents/SecondInputComponent";
import ButtonComponent from "../materialComponents/ButtonComponent";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  yourName: {
    width: "100%",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#03b1fc",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#03b1fc",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#03b1fc",
    },
  },
  confirmedUser: {
    width: "100%",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "green",
    },
  },
});
const FormComponent = () => {
  const classes = useStyles();
  const Licence = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
  ];
  const countries = [
    { title: "Andorra" },
    { title: "United Arab Emirates" },
    { title: "Afghanistan" },
    { title: "Antigua and Barbuda" },
    { title: "Anguilla" },
    { title: "Albania" },
    { title: "Armenia" },
    { title: "Angola" },
    { title: "Antarctica" },
  ];
  return (
    <div className="container-fluid row my-5">
      <div className="leftInputBox  d-flex flex-column col-md-2">
        <InputComponent
          className={classes.root}
          id="outlined-required"
          label="Input Caption"
          defaultValue="Master input"
          variant="outlined"
          helperText="Helping text is here"
        />
        <br />
        <InputComponent
          className={classes.root}
          label="What's your name?"
          id="outlined-required"
          variant="outlined"
        />
        <br />
        <SelectComponent options={Licence} label="Select License" />
        <br />
        <SelectComponent options={countries} label="Choose country" />
        <br />
        <InputComponent
          className={classes.yourName}
          label="Your Name"
          id="outlined-required"
          variant="outlined"
        />
        <br />
        <InputComponent
          className={classes.confirmedUser}
          label="Confirmed User"
          id="outlined-required"
          variant="outlined"
        />
        <br />
        <InputComponent
          className={classes.root}
          error="error"
          id="outlined-error-helper-text"
          defaultValue="Hello World"
          variant="outlined"
          helperText="No such username!"
          label="Error Name"
        />
        <br />
        <InputComponent
          className={classes.root}
          id="outlined-required"
          variant="outlined"
          placeholder="people, places, events"
        />
        <br />
        <InputComponent
          className={classes.root}
          id="outlined-required"
          variant="outlined"
          defaultValue="figma templates"
        />
      </div>
      <div className="personalDetails d-flex flex-column pl-5 pr-5 col-md-7">
        <DemoComponent />
      </div>
      <div className="rightInputBox d-flex flex-column col-md-3">
        <div className="text-center">
          <h5>Sign Up</h5>
          <p>Authorize Account</p>
        </div>
        <div className="text-center">
          <SecondInputComponent label="First name" col="#EFEFEF" />
          <br />
          <SecondInputComponent label="Last name" col="#EFEFEF" />
          <br />
          <SecondInputComponent label="Phone number" col="#EFEFEF" />
          <br />
          <SecondInputComponent label="Email" col="#EFEFEF" />
          <br />
          <SecondInputComponent
            label="Password"
            col="#EFEFEF"
            type="password"
          />
          <br />
          <SecondInputComponent
            label="Confirm Password"
            col="#EFEFEF"
            type="password"
          />
          <br />
          <ButtonComponent value="sign up" color="primary" />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
