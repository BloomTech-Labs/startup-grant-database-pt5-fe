import React from 'react';

//Material UI components
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
//---------------------------------------------------------------------------------------

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ElegibilityComponent = (props) => {

    return (
      <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={props.elegibility}
      disableCloseOnSelect
      getOptionLabel={option => option.elegibility_name}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.elegibility_name}
        </React.Fragment>
      )}
      style={{ width: '85%', alignContent: 'center' }}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label="Elegibility"
          placeholder="Search Elegibility"
          fullWidth
        />
      )}
    />            
  )   
}

export default ElegibilityComponent;