import React,{ Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

const InputComponent = (props) => {
    console.log(props);
    return (
        <div>
            <TextField
                className={props.className}
                error={props.error}
                id={props.id}
                label={props.label}
                placeholder = {props.placeholder}
                defaultValue={props.defaultValue}
                helperText = {props.helperText}
                variant={props.variant}
            />
        </div>
    )
}

export default InputComponent;
