import React from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';

import TextField from '@material-ui/core/TextField';

function SelectComponent(props) {
    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={props.options}
                getOptionLabel={(option) => option.title}
                style={{ width: 'auto' }}
                renderInput={(params) => <TextField {...params} label={props.label} variant="outlined" />}
            />
        </div>
    )
}

export default SelectComponent
