import React, {useState} from 'react';

//Material UI components
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
//---------------------------------------------------------------------------------------

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const StateComponent = (props) => {
    const [checked_states, setChecked_states] = useState({stateName:[]});
    
    const handleStates = (event, option) => {
    const fields =[]
    
    // if (event.target.checked) {
    //   fields.push(option);
    // } else {
    //  fields.remove(option);
    // }  

    //console.log(fields)

      const value = option.state_name;
      console.log('my value', option) 
      setChecked_states([...checked_states, value]);
      console.log(checked_states)
      return checked_states;
    }

    return (
      <Autocomplete
      multiple
      id="checkboxes-states"
      options={props.states}
      disableCloseOnSelect
      getOptionLabel={option => option.state_name}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            value={option}
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            onCheck={event => handleStates(event, option)}
          />
          {option.state_name}
        </React.Fragment>
      )}
      style={{ width: '85%', alignContent: 'center' }}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label="States"
          placeholder="Search States"
          fullWidth
        />
      )}
    />            
  )   
}

export default StateComponent;