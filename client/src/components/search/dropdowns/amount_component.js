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

const amounts = [
    { amount: '<$2,000' },
    { amount: '$2,000 to $10,000'},
    { amount: '$10,000 to $20,000'},
    { amount: '$20000 to $30,000'},
    { amount: '$30,000 to $40,000'},
    { amount: '$40,000 to $50,000'},
    { amount: '$50,000 to $60,000'}
  ];

const AmountComponent = (props) => {
  console.log('step 2 this props',props)
  
    return (
        <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={amounts}
        disableCloseOnSelect
        getOptionLabel={option => option.amount}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.amount}
          </React.Fragment>
        )}
        style={{ width: '85%', alignContent: 'center' }}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Amounts"
            placeholder="Search Amounts"
            fullWidth
          />
        )}
      />            
    )
}

export default AmountComponent;