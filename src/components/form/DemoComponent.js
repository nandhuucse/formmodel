import React from "react";
import ButtonComponent from "../materialComponents/ButtonComponent";
// import TextField from "@material-ui/core/TextField";
import SecondInputComponent from "../materialComponents/SecondInputComponent";
import SelectComponent from "../materialComponents/SelectComponent";
function DemoComponent() {
  const language = [
    { title: "English" },
    { title: "Arab" },
    { title: "Tamil" },
    { title: "Hind" },
    { title: "Anguilla" },
    { title: "Albania" },
    { title: "Armenia" },
    { title: "Angola" },
    { title: "Antarctica" },
  ];
  const timeZone = [
    {
      title: "(GMT -12:00) Eniwetok, Kwajalein",
    },
    {
      title: "(GMT -11:00) Midway Island, Samoa",
    },
    {
      title: "(GMT -10:00) Hawaii",
    },
    {
      title: "(GMT -9:00) Alaska",
    },
    {
      title: "(GMT -8:00) Pacific Time (US & Canada)",
    },
    {
      title: "(GMT -7:00) Mountain Time (US & Canada)",
    },
    {
      title: "(GMT -6:00) Central Time (US & Canada), Mexico City",
    },
  ];
  return (
    <React.Fragment>
      <h2>Personal Details</h2>
      <h4 className="mt-4">Contact info</h4>
      <p className="p-0 m-0 ">Used for tracking you</p>
      <div className="d-flex flex-column justify-content-end  my-4 pl-5">
        <div className="d-flex">
          <label className="my-3 text-right">Full name</label>
          <div className="ml-5">
            <SecondInputComponent
              label="firstname"
              col="#EFEFEF"
              heigth="30px"
            />
          </div>
          <div className="mx-3">
            <SecondInputComponent label="lastname" col="#EFEFEF" />
          </div>
        </div>

        <div className="d-flex my-3">
          <label className="my-3">Company name</label>
          <div className="ml-4 w-100">
            <SecondInputComponent
              width="96%"
              placeholder="e.g Tesla Motors"
              col="#EFEFEF"
            />
          </div>
        </div>

        <div className="d-flex ">
          <label className="my-3">Email address</label>
          <div className="ml-4 w-100">
            <SecondInputComponent width="95%" col="#EFEFEF" move="1ch" />
          </div>
        </div>
      </div>
      <h4 className="mt-4">Account</h4>
      <p className="p-0 m-0 ">Other Preferences</p>
      <div className="d-flex flex-column justify-content-end  my-4 pl-5">
        <div className="d-flex">
          <label className="my-3 text-right">Password</label>
          <div className="ml-5">
            <SecondInputComponent
              label="password"
              col="#EFEFEF"
              heigth="30px"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div className="mx-3">
            <SecondInputComponent
              label="Confirm password"
              col="#EFEFEF"
              type="password"
              autoComplete="current-password"
            />
          </div>
        </div>

        <div className="d-flex my-3">
          <label className="my-3">Language</label>
          <div className="ml-5">
            <SelectComponent options={language} />
          </div>
        </div>

        <div className="d-flex">
          <label className="my-3">Email address</label>
          <div className="ml-4 w-100">
            <SecondInputComponent
              width="95%"
              col="#EFEFEF"
              type="email"
              move="1ch"
            />
          </div>
        </div>

        <div className="d-flex ">
          <label className="my-3">Time Zone</label>
          <div className="ml-5 w-100">
            <SelectComponent options={timeZone} />
          </div>
        </div>

        <div className="d-flex">
          <label className="my-3 text-left">Date & Time</label>
          <div className="ml-5">
            <SecondInputComponent
              col="#EFEFEF"
              heigth="30px"
              type="date"
              width="27ch"
            />
          </div>
          <div className="mx-3">
            <SecondInputComponent col="#EFEFEF" type="time" width="27ch" />
          </div>
        </div>
        <div className="d-block m-auto">
          <ButtonComponent
            topmove="3ch"
            leftmove="6ch"
            value="next"
            color="secondary"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default DemoComponent;
